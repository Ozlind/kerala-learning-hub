import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const id = () => crypto.randomUUID();
const workspaceRoot = () => path.resolve(process.env.OPERATOR_WORKSPACE || (process.env.VERCEL ? '/tmp/ai-studio-operator-workspace' : 'workspace'));
fs.mkdirSync(workspaceRoot(), { recursive: true });
const timeoutSignal = () => AbortSignal.timeout(Number(process.env.PROVIDER_TIMEOUT_MS || 45000));

function safePath(relative) {
  if (typeof relative !== 'string' || !relative.trim() || path.isAbsolute(relative)) throw new Error('A relative workspace path is required.');
  const root = workspaceRoot();
  fs.mkdirSync(root, { recursive: true });
  const realRoot = fs.realpathSync(root);
  const target = path.resolve(root, relative);
  if (target !== root && !target.startsWith(root + path.sep)) throw new Error('Path escapes the operator workspace.');
  let ancestor = target;
  while (!fs.existsSync(ancestor)) {
    const parent = path.dirname(ancestor);
    if (parent === ancestor) throw new Error('Workspace path could not be resolved.');
    ancestor = parent;
  }
  const realAncestor = fs.realpathSync(ancestor);
  if (realAncestor !== realRoot && !realAncestor.startsWith(realRoot + path.sep)) throw new Error('Workspace symlinks cannot point outside the operator workspace.');
  return target;
}

export const toolDefinitions = [
  { type: 'function', name: 'inspect_status', description: 'Read operator status, run count and configured integrations. Never reveals secrets.', parameters: { type: 'object', properties: {}, additionalProperties: false }, strict: true },
  { type: 'function', name: 'search_memory', description: 'Search saved operator memories and recent run summaries.', parameters: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'save_memory', description: 'Save a concise durable project decision, preference, or verified fact.', parameters: { type: 'object', properties: { content: { type: 'string' }, category: { type: 'string' } }, required: ['content','category'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'create_task', description: 'Add a task to the local operator task board.', parameters: { type: 'object', properties: { title: { type: 'string' }, details: { type: 'string' }, priority: { type: 'string', enum: ['low','normal','high'] } }, required: ['title','details','priority'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'list_tasks', description: 'List tasks from the local operator task board.', parameters: { type: 'object', properties: { status: { type: 'string', enum: ['all','todo','doing','done'] } }, required: ['status'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'list_workspace_files', description: 'List files inside the isolated operator workspace.', parameters: { type: 'object', properties: { directory: { type: 'string' } }, required: ['directory'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'read_workspace_file', description: 'Read a UTF-8 text file from the isolated operator workspace.', parameters: { type: 'object', properties: { file: { type: 'string' } }, required: ['file'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'write_workspace_file', description: 'Write a UTF-8 text file inside the isolated operator workspace only.', parameters: { type: 'object', properties: { file: { type: 'string' }, content: { type: 'string' } }, required: ['file','content'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'request_approval', description: 'Create a human approval request for an action that must not execute automatically.', parameters: { type: 'object', properties: { action: { type: 'string' }, reason: { type: 'string' } }, required: ['action','reason'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'github_read_repository', description: 'Read public or token-authorized GitHub repository metadata. Read-only.', parameters: { type: 'object', properties: { repository: { type: 'string' } }, required: ['repository'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'github_list_issues', description: 'List recent open or closed issues from a GitHub repository. Read-only.', parameters: { type: 'object', properties: { repository: { type: 'string' }, state: { type: 'string', enum: ['open','closed','all'] }, limit: { type: 'integer' } }, required: ['repository','state','limit'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'get_weather', description: 'Get current weather and a short forecast using the free Open-Meteo API; no API key required.', parameters: { type: 'object', properties: { location: { type: 'string' } }, required: ['location'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'search_public_knowledge', description: 'Search Wikipedia for concise public background information. Uses the free MediaWiki API without an API key.', parameters: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'], additionalProperties: false }, strict: true },
  { type: 'function', name: 'convert_currency', description: 'Convert currencies using the free Frankfurter reference exchange-rate API; no API key required.', parameters: { type: 'object', properties: { amount: { type: 'number' }, from: { type: 'string' }, to: { type: 'string' } }, required: ['amount','from','to'], additionalProperties: false }, strict: true }
];

const providerSpecs = {
  ollama: { label: 'Ollama (local)', modelEnv: 'OLLAMA_MODEL', defaultModel: 'qwen2.5:3b', keyEnv: null, endpoint: null },
  gemini: { label: 'Google AI Studio', modelEnv: 'GEMINI_MODEL', defaultModel: 'gemini-3.6-flash', keyEnv: 'GEMINI_API_KEY', endpoint: 'https://generativelanguage.googleapis.com/v1beta' },
  groq: { label: 'Groq', modelEnv: 'GROQ_MODEL', defaultModel: 'openai/gpt-oss-20b', keyEnv: 'GROQ_API_KEY', endpoint: 'https://api.groq.com/openai/v1' },
  mistral: { label: 'Mistral (Free mode)', modelEnv: 'MISTRAL_MODEL', defaultModel: 'mistral-small-latest', keyEnv: 'MISTRAL_API_KEY', endpoint: 'https://api.mistral.ai/v1' },
  cloudflare: { label: 'Cloudflare Workers AI', modelEnv: 'CLOUDFLARE_MODEL', defaultModel: '@cf/zai-org/glm-4.7-flash', keyEnv: 'CLOUDFLARE_API_TOKEN', accountEnv: 'CLOUDFLARE_ACCOUNT_ID', endpoint: null },
  openrouter: { label: 'OpenRouter (free models only)', modelEnv: 'OPENROUTER_MODEL', defaultModel: 'openrouter/free', keyEnv: 'OPENROUTER_API_KEY', endpoint: 'https://openrouter.ai/api/v1' },
  openai: { label: 'OpenAI API (metered · opt-in)', modelEnv: 'OPENAI_MODEL', defaultModel: 'gpt-6-luna', keyEnv: 'OPENAI_API_KEY', endpoint: 'https://api.openai.com/v1' }
};

function providerOrder() {
  const defaultOrder = process.env.VERCEL ? 'gemini,groq,mistral,cloudflare,openrouter,openai' : 'ollama,gemini,groq,mistral,cloudflare,openrouter,openai';
  const requested = (process.env.AI_PROVIDER_ORDER || defaultOrder).split(',').map(x => x.trim().toLowerCase()).filter(x => providerSpecs[x]);
  return [...new Set(requested)];
}
function providerConfigured(name) { const spec = providerSpecs[name]; if (name === 'ollama') return true; if (name === 'openai' && process.env.OPENAI_API_ENABLED !== 'true') return false; if (!spec?.keyEnv || !process.env[spec.keyEnv]) return false; return !spec.accountEnv || Boolean(process.env[spec.accountEnv]); }
function providerModel(name) { const spec = providerSpecs[name]; return process.env[spec.modelEnv] || spec.defaultModel; }
function toOpenAIMessages(input, system) {
  return [{ role: 'system', content: system }, ...input.map(item => {
    if (item.role === 'assistant' && item.tool_calls) return item;
    if (item.role === 'tool') return { role: 'tool', tool_call_id: item.tool_call_id, name: item.name, content: item.content };
    return { role: item.role === 'model' ? 'assistant' : item.role, content: item.content ?? '' };
  })];
}
function toGeminiContents(input) {
  const contents = [];
  for (const item of input) {
    if (item.role === 'user') contents.push({ role: 'user', parts: [{ text: String(item.content || '') }] });
    else if (item.role === 'assistant' && item.tool_calls?.length) contents.push({ role: 'model', parts: item.tool_calls.map(call => ({ functionCall: { name: call.function.name, args: JSON.parse(call.function.arguments || '{}') } })) });
    else if (item.role === 'assistant' && item.content) contents.push({ role: 'model', parts: [{ text: item.content }] });
    else if (item.role === 'tool') contents.push({ role: 'user', parts: [{ functionResponse: { call_id: item.tool_call_id, name: item.name, response: JSON.parse(item.content || '{}') } }] });
  }
  return contents;
}

export class OperatorEngine {
  constructor(store, fetchImpl = fetch) { this.store = store; this.fetch = fetchImpl; this.lastRunAt = 0; }
  providers() { return providerOrder().filter(providerConfigured); }
  provider() { return this.providers()[0] || null; }
  status() {
    const state = this.store.read();
    const activeProvider = this.provider();
    const providers = providerOrder().map(name => ({ id: name, name: providerSpecs[name].label, model: providerModel(name), configured: providerConfigured(name), mode: name === 'ollama' ? 'local' : name === 'openai' ? 'metered-opt-in' : 'free-tier-key-required' }));
    return {
      engine: 'local-first-free-only', provider: activeProvider || 'none', model: activeProvider ? providerModel(activeProvider) : 'not configured', modelConfigured: this.providers().some(name => name !== 'ollama'), localProvider: 'availability_checked_separately',
      providers,
      integrations: { wikipedia: 'free_no_key', ollama: 'local_service_not_yet_verified', gemini: Boolean(process.env.GEMINI_API_KEY), groq: Boolean(process.env.GROQ_API_KEY), mistral: Boolean(process.env.MISTRAL_API_KEY), cloudflare: Boolean(process.env.CLOUDFLARE_API_TOKEN && process.env.CLOUDFLARE_ACCOUNT_ID), openrouter: Boolean(process.env.OPENROUTER_API_KEY), openai: Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_API_ENABLED === 'true'), githubReadOnly: 'public_api_available', githubAuthenticated: Boolean(process.env.GITHUB_TOKEN), openMeteo: 'free_no_key', frankfurter: 'free_no_key', meteredSearch: 'disabled_by_free_only_policy', paidProviders: process.env.OPENAI_API_ENABLED === 'true' ? 'openai_opt_in_enabled' : 'disabled', browserAutomation: 'external_connector_only', cloudDeploy: 'approval_required' },
      runs: state.runs.length, memories: state.memories.length, pendingApprovals: state.approvals.filter(x => x.status === 'pending').length, schedules: state.schedules.filter(x => x.enabled).length
    };
  }
  async checkProvider() {
    const results = [];
    for (const provider of providerOrder()) {
      if (!providerConfigured(provider)) { results.push({ provider, configured: false, reachable: false, detail: provider === 'openai' ? 'OpenAI is metered and disabled until you explicitly enable it.' : `Add ${providerSpecs[provider].keyEnv} to enable this free-tier provider.` }); continue; }
      if (provider === 'ollama') {
        try {
          const base = (process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
          const response = await this.fetch(`${base}/api/tags`, { signal: timeoutSignal() }); const data = await response.json();
          results.push({ provider, configured: true, reachable: response.ok, models: (data.models || []).map(x => x.name), detail: response.ok ? 'Local Ollama reachable' : `HTTP ${response.status}` });
        } catch (error) { results.push({ provider, configured: true, reachable: false, detail: error.name === 'TimeoutError' ? 'Local Ollama check timed out' : 'Local Ollama is not reachable' }); }
      } else results.push({ provider, configured: true, reachable: null, detail: 'API key is present; live inference has not been verified.' });
    }
    const reachable = results.some(x => x.reachable === true);
    const configured = results.some(x => x.configured);
    return { provider: this.provider(), providers: results, reachable, configured, detail: results.find(x => x.reachable === true)?.detail || results.find(x => x.configured && x.provider !== 'ollama')?.detail || results[0]?.detail || 'No provider configured. Start Ollama locally or add a free-tier API key.' };
  }

  async testProvider(provider) {
    if (!providerSpecs[provider]) throw new Error('Unknown AI provider.');
    if (provider === 'openai' && process.env.OPENAI_API_ENABLED !== 'true') return { provider, configured: false, ok: false, detail: 'OpenAI is disabled by default. Review API billing, then enable metered requests in provider settings.' };
    if (!providerConfigured(provider)) return { provider, configured: false, ok: false, detail: 'This provider is not configured. Save its credentials first.' };
    try {
      const result = await this.requestFromProvider(provider, [{ role: 'user', content: 'Reply with OK only.' }], 'This is a short connectivity test. Reply exactly OK and do not call tools.');
      if (!result.message?.content?.trim() && !result.calls?.length) throw new Error('empty_response');
      this.store.audit({ type: 'provider_connection_test', provider, ok: true });
      return { provider, model: providerModel(provider), configured: true, ok: true, detail: 'Live inference succeeded. This provider is ready.' };
    } catch (error) {
      const message = String(error?.message || '').toLowerCase();
      const detail = error?.name === 'TimeoutError' ? 'The provider timed out. Check its service status and retry.'
        : /401|403|unauthorized|invalid.*key|api.?key/.test(message) ? 'Authentication failed. Check the saved API key and its permissions.'
        : /429|quota|rate.?limit|resource.?exhausted/.test(message) ? 'The provider rate limit or free quota was reached. Try another provider later.'
        : /404|model.*not found|unknown model/.test(message) ? 'The selected model is unavailable. Change the model setting or choose another provider.'
        : 'The provider did not return a usable response. Check its configuration and try again.';
      this.store.audit({ type: 'provider_connection_test', provider, ok: false, reason: detail });
      return { provider, model: providerModel(provider), configured: true, ok: false, detail };
    }
  }
  async requestFromProvider(provider, input, system) {
    const model = providerModel(provider);
    if (provider === 'ollama') {
      const base = (process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
      const response = await this.fetch(`${base}/api/chat`, { method: 'POST', signal: timeoutSignal(), headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model, stream: false, messages: toOpenAIMessages(input, system), tools: toolDefinitions.map(t => ({ type: 'function', function: { name: t.name, description: t.description, parameters: t.parameters } })) }) });
      const payload = await response.json(); if (!response.ok) throw new Error(payload.error || `Ollama error ${response.status}`);
      const message = payload.message || {};
      const calls = (message.tool_calls || []).map((call, index) => ({ id: call.id || `ollama-call-${index}`, name: call.function.name, arguments: call.function.arguments || '{}' }));
      const toolCalls = calls.map(call => ({ id: call.id, type: 'function', function: { name: call.name, arguments: typeof call.arguments === 'string' ? call.arguments : JSON.stringify(call.arguments) } }));
      return { provider, message: { role: 'assistant', content: message.content || '', ...(toolCalls.length ? { tool_calls: toolCalls } : {}) }, calls };
    }
    if (provider === 'gemini') {
      const response = await this.fetch(`${providerSpecs.gemini.endpoint}/models/${encodeURIComponent(model)}:generateContent`, { method: 'POST', signal: timeoutSignal(), headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY }, body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: toGeminiContents(input), tools: [{ functionDeclarations: toolDefinitions.map(t => ({ name: t.name, description: t.description, parameters: t.parameters })) }], toolConfig: { functionCallingConfig: { mode: 'AUTO' } }, generationConfig: { maxOutputTokens: 2048 } }) });
      const payload = await response.json(); if (!response.ok) throw new Error(payload.error?.message || `Gemini API error ${response.status}`);
      const parts = payload.candidates?.[0]?.content?.parts || [];
      const calls = parts.filter(part => part.functionCall).map((part, index) => ({ id: part.functionCall.id || `gemini-call-${index}`, name: part.functionCall.name, arguments: part.functionCall.args || {} }));
      const toolCalls = calls.map(call => ({ id: call.id, type: 'function', function: { name: call.name, arguments: JSON.stringify(call.arguments) } }));
      return { provider, message: { role: 'assistant', content: parts.filter(part => part.text).map(part => part.text).join('\n'), ...(toolCalls.length ? { tool_calls: toolCalls } : {}) }, calls };
    }
    const spec = providerSpecs[provider];
    if (provider === 'openai') {
      const response = await this.fetch(`${spec.endpoint}/chat/completions`, {
        method: 'POST',
        signal: timeoutSignal(),
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages: toOpenAIMessages(input, system),
          tools: toolDefinitions.map(t => ({ type: 'function', function: { name: t.name, description: t.description, parameters: t.parameters, strict: true } })),
          tool_choice: 'auto',
          parallel_tool_calls: false,
          max_completion_tokens: 1024,
          store: false
        })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error?.message || `OpenAI API error ${response.status}`);
      const message = payload.choices?.[0]?.message || {};
      return { provider, message: { role: 'assistant', content: message.content || '', ...(message.tool_calls?.length ? { tool_calls: message.tool_calls } : {}) }, calls: (message.tool_calls || []).map(call => ({ id: call.id, name: call.function.name, arguments: call.function.arguments || '{}' })) };
    }
    const endpoint = provider === 'cloudflare' ? `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(process.env.CLOUDFLARE_ACCOUNT_ID)}/ai/v1` : spec.endpoint;
    const headers = { Authorization: `Bearer ${process.env[spec.keyEnv]}`, 'Content-Type': 'application/json' };
    if (provider === 'openrouter') { headers['HTTP-Referer'] = 'http://127.0.0.1:8787'; headers['X-Title'] = 'AI Studio Operator'; }
    const response = await this.fetch(`${endpoint}/chat/completions`, { method: 'POST', signal: timeoutSignal(), headers, body: JSON.stringify({ model, messages: toOpenAIMessages(input, system), tools: toolDefinitions.map(t => ({ type: 'function', function: { name: t.name, description: t.description, parameters: t.parameters, strict: true } })), tool_choice: 'auto', parallel_tool_calls: false, temperature: 0.2, max_tokens: 2048 }) });
    const payload = await response.json(); if (!response.ok) throw new Error(payload.error?.message || `${provider} API error ${response.status}`);
    const message = payload.choices?.[0]?.message || {};
    return { provider, message: { role: 'assistant', content: message.content || '', ...(message.tool_calls?.length ? { tool_calls: message.tool_calls } : {}) }, calls: (message.tool_calls || []).map(c => ({ id: c.id, name: c.function.name, arguments: c.function.arguments || '{}' })) };
  }
  async requestModel(input, system, excluded = []) {
    const candidates = this.providers().filter(name => !excluded.includes(name));
    if (!candidates.length) throw new Error(process.env.VERCEL ? 'No remote free-tier AI provider is configured. Add a provider key in Connect AI services. Paid providers are disabled.' : 'No AI provider is configured. Start Ollama or add a free-tier provider key. Paid providers are disabled.');
    const failures = [];
    for (const provider of candidates) {
      try {
        const result = await this.requestFromProvider(provider, input, system);
        if (!result.message || (!String(result.message.content || '').trim() && !(result.calls || []).length)) throw new Error('Provider returned an empty response.');
        return result;
      } catch (error) {
        failures.push(`${provider}: ${error.message}`);
        this.store.audit({ type: 'provider_fallback', provider, reason: String(error.message).slice(0, 300) });
      }
    }
    throw new Error(`All configured free providers failed. ${failures.join(' | ')}`);
  }
  async execute(name, args) {
    switch (name) {
      case 'inspect_status': return this.status();
      case 'search_memory': { const s = this.store.read(); const q = String(args.query || '').toLowerCase(); return { memories: s.memories.filter(x => x.content.toLowerCase().includes(q) || x.category.toLowerCase().includes(q)).slice(0, 10), recentRuns: s.runs.slice(0, 5).map(({ id, goal, status, summary }) => ({ id, goal, status, summary })) }; }
      case 'save_memory': { if (!args.content?.trim() || args.content.length > 4000) throw new Error('Memory must contain 1–4000 characters.'); const item = { id: id(), at: new Date().toISOString(), category: String(args.category).slice(0, 80), content: args.content.trim() }; this.store.addMemory(item); return { saved: true, id: item.id }; }
      case 'create_task': { const title=String(args.title||'').trim(), details=String(args.details||'').trim(); if(!title || title.length>180 || details.length>2000) throw new Error('Task title is required (max 180 chars); details max 2,000 chars.'); if((this.store.read().tasks||[]).length>=300) throw new Error('Task board is full. Remove completed tasks before adding more.'); const priority=['low','normal','high'].includes(args.priority)?args.priority:'normal'; const item={id:id(),title,details,priority,status:'todo',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}; this.store.addTask(item); return {created:true,task:item}; }
      case 'list_tasks': { const status=['todo','doing','done'].includes(args.status)?args.status:'all'; const tasks=this.store.read().tasks||[]; return {tasks:tasks.filter(x=>status==='all'||x.status===status).slice(0,50)}; }
      case 'list_workspace_files': { const dir = safePath(args.directory || '.'); if (!fs.existsSync(dir)) return { files: [] }; return { files: fs.readdirSync(dir, { withFileTypes: true }).map(x => ({ name: x.name, type: x.isDirectory() ? 'directory' : 'file' })) }; }
      case 'read_workspace_file': { const file = safePath(args.file); if (!fs.existsSync(file)) throw new Error('File not found.'); const stat = fs.statSync(file); if (!stat.isFile() || stat.size > 100_000) throw new Error('Only files up to 100 KB can be read.'); return { content: fs.readFileSync(file, 'utf8') }; }
      case 'write_workspace_file': { const file = safePath(args.file); if (String(args.content).length > 100_000) throw new Error('File exceeds 100 KB limit.'); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, args.content, { encoding: 'utf8', mode: 0o600 }); this.store.audit({ type: 'workspace_write', file: path.relative(workspaceRoot(), file) }); return { written: true, file: path.relative(workspaceRoot(), file) }; }
      case 'request_approval': { if (!args.action?.trim() || !args.reason?.trim()) throw new Error('Action and reason are required.'); const item = { id: id(), action: args.action.slice(0, 200), reason: args.reason.slice(0, 1000), status: 'pending', createdAt: new Date().toISOString() }; this.store.addApproval(item); return { approvalRequested: true, id: item.id, status: item.status, note: 'No action was executed.' }; }
      case 'github_read_repository': { if (!/^[\w.-]+\/[\w.-]+$/.test(args.repository || '')) throw new Error('Use owner/repository format.'); const response = await this.fetch(`https://api.github.com/repos/${args.repository}`, { headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) }, signal: timeoutSignal() }); const data = await response.json(); if (!response.ok) throw new Error(data.message || `GitHub API error ${response.status}`); return { repository: data.full_name, description: data.description, private: data.private, defaultBranch: data.default_branch, stars: data.stargazers_count, updatedAt: data.updated_at, htmlUrl: data.html_url, readOnly: true }; }
      case 'github_list_issues': { if (!/^[\w.-]+\/[\w.-]+$/.test(args.repository || '')) throw new Error('Use owner/repository format.'); const state = ['open','closed','all'].includes(args.state) ? args.state : 'open'; const limit = Math.max(1, Math.min(30, Number(args.limit) || 10)); const response = await this.fetch(`https://api.github.com/repos/${args.repository}/issues?state=${state}&per_page=${limit}`, { headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) }, signal: timeoutSignal() }); const data = await response.json(); if (!response.ok) throw new Error(data.message || `GitHub API error ${response.status}`); return { repository: args.repository, issues: data.filter(x => !x.pull_request).map(x => ({ number: x.number, title: x.title, state: x.state, url: x.html_url, updatedAt: x.updated_at })), readOnly: true }; }
      case 'get_weather': { const location = String(args.location || '').trim(); if (!location || location.length > 120) throw new Error('Location must contain 1–120 characters.'); const geo = await this.fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`, { signal: timeoutSignal() }); const place = await geo.json(); if (!geo.ok || !place.results?.length) throw new Error('Location not found by Open-Meteo.'); const found = place.results[0]; const forecast = await this.fetch(`https://api.open-meteo.com/v1/forecast?latitude=${found.latitude}&longitude=${found.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=3`, { signal: timeoutSignal() }); const weather = await forecast.json(); if (!forecast.ok) throw new Error(weather.reason || `Weather API error ${forecast.status}`); return { location: `${found.name}${found.admin1 ? ', '+found.admin1 : ''}, ${found.country}`, timezone: weather.timezone, current: weather.current, daily: weather.daily, source: 'Open-Meteo' }; }
      case 'search_public_knowledge': { const query = String(args.query || '').trim(); if (!query || query.length > 120) throw new Error('Search query must contain 1–120 characters.'); const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&prop=extracts%7Cinfo&exintro=1&explaintext=1&exchars=700&inprop=url&format=json&formatversion=2`; const response = await this.fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'AIStudioOperator/0.1 (https://github.com/Ozlind/kerala-learning-hub)' }, signal: timeoutSignal() }); const data = await response.json(); if (!response.ok) throw new Error(data.error?.info || `Wikipedia API error ${response.status}`); const pages = Array.isArray(data.query?.pages) ? data.query.pages : []; return { query, results: pages.slice(0, 5).map(page => ({ title: page.title, summary: String(page.extract || '').slice(0, 700), url: page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(String(page.title || '').replaceAll(' ', '_'))}` })), source: 'Wikipedia / MediaWiki API', attribution: 'Wikipedia content is available under its applicable open licence; verify facts with primary sources.' }; }
      case 'convert_currency': { const amount = Number(args.amount); const from = String(args.from || '').toUpperCase(); const to = String(args.to || '').toUpperCase(); if (!Number.isFinite(amount) || Math.abs(amount) > 1e12 || !/^[A-Z]{3}$/.test(from) || !/^[A-Z]{3}$/.test(to)) throw new Error('Provide a valid amount and 3-letter ISO currency codes.'); if (from === to) return { amount, from, to, converted: amount, rate: 1, source: 'Frankfurter' }; const response = await this.fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`, { signal: timeoutSignal() }); const data = await response.json(); if (!response.ok || !data.rates?.[to]) throw new Error(data.message || `Currency API error ${response.status}`); const rate = data.rates[to]; return { amount, from, to, converted: Number((amount * rate).toFixed(6)), rate, date: data.date, source: 'Frankfurter reference rates' }; }
      default: throw new Error(`Tool not allowed: ${name}`);
    }
  }
  async run(goal) {
    if (typeof goal !== 'string' || !goal.trim() || goal.length > 8000) throw new Error('Goal must contain 1–8000 characters.');
    const minimumGap = Number(process.env.MIN_RUN_INTERVAL_MS || 3000); if (Date.now() - this.lastRunAt < minimumGap) throw new Error('Please wait a few seconds before starting another run.'); this.lastRunAt = Date.now();
    const run = { id: id(), goal: goal.trim(), startedAt: new Date().toISOString(), provider: this.provider() || 'none', providersUsed: [], status: 'running', steps: [], summary: '' };
    const system = `You are AI Studio Operator, an exacting autonomous software/product operator. Work only inside the isolated operator workspace using provided tools. GitHub tool is read-only. Never claim access to browser, Vercel, Supabase or cloud systems unless explicitly confirmed. Never reveal secrets. Destructive actions, public deployment, spending, production writes and external communications are prohibited. Request approval for such actions; never execute them. Plan briefly, execute low-risk work, verify results, and report completed versus blocked work precisely.`;
    let input = [{ role: 'user', content: goal.trim() }];
    try {
      for (let turn = 0; turn < 8; turn++) {
        const response = await this.requestModel(input, system);
        if (!run.providersUsed.includes(response.provider)) run.providersUsed.push(response.provider);
        run.provider = response.provider;
        const calls = response.calls || [];
        input.push({ role: 'assistant', ...response.message });
        if (!calls.length) { run.summary = response.message.content || 'Run completed without a text summary.'; run.status = 'completed'; break; }
        for (const call of calls) {
          let result;
          try { result = await this.execute(call.name, typeof call.arguments === 'string' ? JSON.parse(call.arguments) : call.arguments); }
          catch (error) { result = { error: error.message }; }
          run.steps.push({ tool: call.name, result });
          input.push({ role: 'tool', name: call.name, tool_call_id: call.id, content: JSON.stringify(result) });
        }
      }
      if (run.status === 'running') { run.status = 'limit_reached'; run.summary = 'Stopped at the 8-turn safety limit; inspect steps and continue with a narrower goal.'; }
    } catch (error) { run.status = 'failed'; run.summary = error.name === 'TimeoutError' ? 'Provider request timed out. Check local connectivity and retry.' : error.message; }
    run.completedAt = new Date().toISOString(); this.store.addRun(run); return run;
  }
}
