import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import { Store } from '../src/store.js';
import { OperatorEngine } from '../src/engine.js';
const temp=()=>fs.mkdtempSync(path.join(os.tmpdir(),'aso-'));

test('persistent memory is saved and searchable',async()=>{const root=temp();const engine=new OperatorEngine(new Store(path.join(root,'data')));const saved=await engine.execute('save_memory',{content:'Keep all work isolated from protected repositories',category:'safety'});assert.equal(saved.saved,true);const found=await engine.execute('search_memory',{query:'isolated'});assert.equal(found.memories.length,1)});
test('workspace file writes and reads stay inside configured workspace',async()=>{const root=temp();const old=process.env.OPERATOR_WORKSPACE;process.env.OPERATOR_WORKSPACE=path.join(root,'workspace');try{const engine=new OperatorEngine(new Store(path.join(root,'data')));await engine.execute('write_workspace_file',{file:'notes/test.txt',content:'verified'});const read=await engine.execute('read_workspace_file',{file:'notes/test.txt'});assert.equal(read.content,'verified');await assert.rejects(()=>engine.execute('read_workspace_file',{file:'../escape.txt'}));const outside=path.join(root,'outside.txt');fs.writeFileSync(outside,'private');fs.symlinkSync(outside,path.join(process.env.OPERATOR_WORKSPACE,'linked.txt'));await assert.rejects(()=>engine.execute('read_workspace_file',{file:'linked.txt'}),/symlinks/);}finally{if(old===undefined)delete process.env.OPERATOR_WORKSPACE;else process.env.OPERATOR_WORKSPACE=old}});
test('status never exposes credentials',()=>{const engine=new OperatorEngine(new Store(path.join(temp(),'data')));const status=engine.status();assert.equal(JSON.stringify(status).includes('sk-'),false);assert.ok('modelConfigured' in status)});
test('free-only provider status never exposes credentials or advertises paid providers',()=>{const engine=new OperatorEngine(new Store(path.join(temp(),'data')));const status=engine.status();assert.equal(status.engine,'local-first-free-only');if(process.env.VERCEL)assert.ok(!status.providers.some(x=>x.id==='ollama'));else assert.ok(status.providers.some(x=>x.id==='ollama'));assert.ok(!status.providers.some(x=>x.id==='openai'));assert.equal(status.integrations.paidProviders,'disabled');assert.equal(JSON.stringify(status).includes('sk-'),false)});
test('approval requests are recorded but never execute actions',async()=>{const engine=new OperatorEngine(new Store(path.join(temp(),'data')));const result=await engine.execute('request_approval',{action:'Deploy public website',reason:'Needs owner review'});assert.equal(result.status,'pending');assert.equal(result.note,'No action was executed.');assert.equal(engine.status().pendingApprovals,1)});
test('GitHub integration validates repository names and is read-only',async()=>{const fakeFetch=async url=>({ok:true,json:async()=>({full_name:'octo/demo',description:'sample',private:false,default_branch:'main',stargazers_count:4,updated_at:'2026-01-01',html_url:'https://github.com/octo/demo'})});const engine=new OperatorEngine(new Store(path.join(temp(),'data')),fakeFetch);await assert.rejects(()=>engine.execute('github_read_repository',{repository:'https://bad'}));const repo=await engine.execute('github_read_repository',{repository:'octo/demo'});assert.equal(repo.readOnly,true);assert.equal(repo.repository,'octo/demo')});
test('Ollama tool loop appends assistant tool call before tool result',async()=>{const old=process.env.AI_PROVIDER_ORDER;process.env.AI_PROVIDER_ORDER='ollama';try{const engine=new OperatorEngine(new Store(path.join(temp(),'data')));let turn=0;engine.requestModel=async input=>{turn++;if(turn===1)return {provider:'ollama',message:{content:'',tool_calls:[{function:{name:'save_memory',arguments:{content:'test memory',category:'test'}}}]},calls:[{name:'save_memory',arguments:{content:'test memory',category:'test'}}]};assert.equal(input.at(-2).role,'assistant');assert.equal(input.at(-1).role,'tool');return {provider:'ollama',message:{content:'Memory saved and verified.'},calls:[]}};const result=await engine.run('save a test memory');assert.equal(result.status,'completed');assert.equal(result.steps.length,1);assert.equal(turn,2)}finally{if(old===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=old}});

test('Open-Meteo weather uses free geocoding and forecast endpoints',async()=>{const calls=[];const fakeFetch=async url=>{calls.push(String(url));if(String(url).includes('geocoding-api'))return {ok:true,json:async()=>({results:[{name:'Thiruvananthapuram',admin1:'Kerala',country:'India',latitude:8.5,longitude:76.9}]})};return {ok:true,json:async()=>({timezone:'Asia/Kolkata',current:{temperature_2m:29},daily:{time:['2026-10-30']}})}};const engine=new OperatorEngine(new Store(path.join(temp(),'data')),fakeFetch);const weather=await engine.execute('get_weather',{location:'Thiruvananthapuram'});assert.equal(weather.location,'Thiruvananthapuram, Kerala, India');assert.equal(calls.length,2);assert.ok(calls[1].includes('forecast'))});
test('GitHub issue lookup remains read-only and filters pull requests',async()=>{const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async()=>({ok:true,json:async()=>[{number:1,title:'Bug',state:'open',html_url:'https://github.com/a/b/issues/1',updated_at:'2026-01-01'},{number:2,pull_request:{url:'x'},title:'PR'}]}));const result=await engine.execute('github_list_issues',{repository:'a/b',state:'open',limit:5});assert.equal(result.issues.length,1);assert.equal(result.readOnly,true)});
test('Frankfurter currency conversion calculates using returned reference rate',async()=>{const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async url=>({ok:true,json:async()=>({date:'2026-10-29',rates:{INR:83.25}})}));const result=await engine.execute('convert_currency',{amount:10,from:'USD',to:'INR'});assert.equal(result.converted,832.5);assert.equal(result.rate,83.25)});

test('free provider router falls back from local Ollama to Groq without paid providers',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER, oldGroq=process.env.GROQ_API_KEY;
  process.env.AI_PROVIDER_ORDER='ollama,groq'; process.env.GROQ_API_KEY='test-groq-key';
  try {
    const calls=[];
    const fakeFetch=async(url,options={})=>{
      calls.push({url:String(url),options});
      if(String(url).endsWith('/api/chat')) return {ok:false,json:async()=>({error:'Ollama offline'})};
      return {ok:true,json:async()=>({choices:[{message:{role:'assistant',content:'Fallback is working.'}}]})};
    };
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),fakeFetch);
    const result=await engine.requestModel([{role:'user',content:'hello'}],'system');
    assert.equal(result.provider,'groq');
    assert.equal(result.message.content,'Fallback is working.');
    assert.equal(calls[1].url,'https://api.groq.com/openai/v1/chat/completions');
    assert.equal(calls[1].options.headers.Authorization,'Bearer test-groq-key');
    assert.equal(JSON.parse(calls[1].options.body).model,'openai/gpt-oss-20b');
  } finally {
    if(oldOrder===undefined) delete process.env.AI_PROVIDER_ORDER; else process.env.AI_PROVIDER_ORDER=oldOrder;
    if(oldGroq===undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY=oldGroq;
  }
});
test('OpenRouter defaults to its explicit free-model router',()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER, oldKey=process.env.OPENROUTER_API_KEY;
  process.env.AI_PROVIDER_ORDER='openrouter'; process.env.OPENROUTER_API_KEY='test-key';
  try { const engine=new OperatorEngine(new Store(path.join(temp(),'data'))); assert.equal(engine.status().provider,'openrouter'); assert.equal(engine.status().model,'openrouter/free'); }
  finally { if(oldOrder===undefined) delete process.env.AI_PROVIDER_ORDER; else process.env.AI_PROVIDER_ORDER=oldOrder; if(oldKey===undefined) delete process.env.OPENROUTER_API_KEY; else process.env.OPENROUTER_API_KEY=oldKey; }
});
test('Gemini tool calls are returned as function responses on the next turn',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER, oldKey=process.env.GEMINI_API_KEY;
  process.env.AI_PROVIDER_ORDER='gemini'; process.env.GEMINI_API_KEY='test-gemini-key';
  try {
    const requests=[]; let turn=0;
    const fakeFetch=async(url,options)=>{
      requests.push(JSON.parse(options.body)); turn++;
      if(turn===1) return {ok:true,json:async()=>({candidates:[{content:{parts:[{functionCall:{name:'save_memory',args:{content:'Gemini loop works',category:'test'}}}]}}]})};
      return {ok:true,json:async()=>({candidates:[{content:{parts:[{text:'Saved and checked.'}]}}]})};
    };
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),fakeFetch);
    const result=await engine.run('save a memory');
    assert.equal(result.status,'completed'); assert.equal(result.providersUsed[0],'gemini');
    assert.ok(requests[1].contents.some(item=>item.role==='model' && item.parts.some(part=>part.functionCall)));
    assert.ok(requests[1].contents.some(item=>item.role==='user' && item.parts.some(part=>part.functionResponse)));
  } finally {
    if(oldOrder===undefined) delete process.env.AI_PROVIDER_ORDER; else process.env.AI_PROVIDER_ORDER=oldOrder;
    if(oldKey===undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY=oldKey;
  }
});
test('provider status distinguishes configured keys from verified reachability',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER, oldKey=process.env.GEMINI_API_KEY;
  process.env.AI_PROVIDER_ORDER='ollama,gemini'; process.env.GEMINI_API_KEY='test-key';
  try {
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async()=>({ok:false,status:503,json:async()=>({})}));
    assert.equal(engine.status().modelConfigured,true);
    const check=await engine.checkProvider();
    assert.equal(check.reachable,false);
    assert.equal(check.configured,true);
    assert.match(check.providers.find(x=>x.provider==='gemini').detail,/not been verified/i);
  } finally {
    if(oldOrder===undefined) delete process.env.AI_PROVIDER_ORDER; else process.env.AI_PROVIDER_ORDER=oldOrder;
    if(oldKey===undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY=oldKey;
  }
});
test('Gemini function responses preserve the provider call id',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER, oldKey=process.env.GEMINI_API_KEY;
  process.env.AI_PROVIDER_ORDER='gemini'; process.env.GEMINI_API_KEY='test-gemini-key';
  try {
    const requests=[]; let turn=0;
    const fakeFetch=async(url,options)=>{
      requests.push(JSON.parse(options.body)); turn++;
      if(turn===1) return {ok:true,json:async()=>({candidates:[{content:{parts:[{functionCall:{id:'call-123',name:'save_memory',args:{content:'Call id preserved',category:'test'}}}]}}]})};
      return {ok:true,json:async()=>({candidates:[{content:{parts:[{text:'Done.'}]}}]})};
    };
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),fakeFetch);
    const result=await engine.run('save a memory');
    assert.equal(result.status,'completed');
    const responsePart=requests[1].contents.flatMap(item=>item.parts||[]).find(part=>part.functionResponse);
    assert.equal(responsePart.functionResponse.call_id,'call-123');
    assert.equal(requests[1].generationConfig.temperature,undefined);
  } finally {
    if(oldOrder===undefined) delete process.env.AI_PROVIDER_ORDER; else process.env.AI_PROVIDER_ORDER=oldOrder;
    if(oldKey===undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY=oldKey;
  }
});
test('task board persists, updates status and deletes tasks',()=>{
  const store=new Store(path.join(temp(),'data'));
  const task={id:'task-1',title:'Ship task board',details:'Add CRUD',priority:'high',status:'todo',createdAt:new Date().toISOString()};
  store.addTask(task);
  assert.equal(store.read().tasks[0].title,'Ship task board');
  assert.equal(store.updateTask('task-1',{status:'doing'}).status,'doing');
  assert.equal(store.deleteTask('task-1'),true);
  assert.equal(store.read().tasks.length,0);
});
test('operator task tools create and filter local tasks',async()=>{
  const engine=new OperatorEngine(new Store(path.join(temp(),'data')));
  const created=await engine.execute('create_task',{title:'Run QA',details:'Check task board',priority:'high'});
  assert.equal(created.created,true);
  const tasks=await engine.execute('list_tasks',{status:'todo'});
  assert.equal(tasks.tasks.length,1);
  assert.equal(tasks.tasks[0].priority,'high');
});
test('saved memories can be deleted without disturbing other records',()=>{
  const store=new Store(path.join(temp(),'data'));
  store.addMemory({id:'keep',category:'test',content:'keep this'});
  store.addMemory({id:'remove',category:'test',content:'remove this'});
  assert.equal(store.deleteMemory('remove'),true);
  assert.deepEqual(store.read().memories.map(x=>x.id),['keep']);
  assert.equal(store.deleteMemory('missing'),false);
});
test('projects persist, update lifecycle and remove attached notes',()=>{
  const store=new Store(path.join(temp(),'data'));
  store.addProject({id:'p1',name:'Research',status:'active'});
  store.addNote({id:'n1',projectId:'p1',title:'Finding',content:'Useful evidence'});
  assert.equal(store.updateProject('p1',{status:'paused'}).status,'paused');
  assert.equal(store.deleteProject('p1'),true);
  assert.equal(store.read().projects.length,0);
  assert.equal(store.read().notes.length,0);
});
test('notes can be edited and deleted independently',()=>{
  const store=new Store(path.join(temp(),'data'));
  store.addNote({id:'n1',title:'Draft',content:'First'});
  assert.equal(store.updateNote('n1',{content:'Revised'}).content,'Revised');
  assert.equal(store.deleteNote('n1'),true);
  assert.equal(store.read().notes.length,0);
});

test('provider test performs a minimal live inference and never returns credentials',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER,oldKey=process.env.GROQ_API_KEY;
  process.env.AI_PROVIDER_ORDER='groq';process.env.GROQ_API_KEY='test-secret-key';
  try{
    let request;
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async(url,options)=>{request={url:String(url),body:JSON.parse(options.body)};return {ok:true,json:async()=>({choices:[{message:{role:'assistant',content:'OK'}}]})};});
    const result=await engine.testProvider('groq');
    assert.equal(result.ok,true);assert.equal(result.configured,true);assert.equal(result.model,'openai/gpt-oss-20b');
    assert.equal(request.url,'https://api.groq.com/openai/v1/chat/completions');
    assert.equal(request.body.messages.at(-1).content,'Reply with OK only.');
    assert.equal(JSON.stringify(result).includes('test-secret-key'),false);
  }finally{if(oldOrder===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=oldOrder;if(oldKey===undefined)delete process.env.GROQ_API_KEY;else process.env.GROQ_API_KEY=oldKey;}
});
test('provider test gives a safe actionable failure for invalid credentials',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER,oldKey=process.env.GROQ_API_KEY;
  process.env.AI_PROVIDER_ORDER='groq';process.env.GROQ_API_KEY='invalid-key';
  try{
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async()=>({ok:false,status:401,json:async()=>({error:{message:'Invalid API key'}})}));
    const result=await engine.testProvider('groq');
    assert.equal(result.ok,false);assert.match(result.detail,/Authentication failed/);
    assert.equal(JSON.stringify(result).includes('invalid-key'),false);
  }finally{if(oldOrder===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=oldOrder;if(oldKey===undefined)delete process.env.GROQ_API_KEY;else process.env.GROQ_API_KEY=oldKey;}
});
test('provider router skips a provider that returns an empty successful response',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER,oldGroq=process.env.GROQ_API_KEY,oldMistral=process.env.MISTRAL_API_KEY;
  process.env.AI_PROVIDER_ORDER='groq,mistral';process.env.GROQ_API_KEY='test-groq';process.env.MISTRAL_API_KEY='test-mistral';
  try{
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async url=>{
      if(String(url).includes('groq.com'))return {ok:true,json:async()=>({choices:[{message:{role:'assistant',content:''}}]})};
      return {ok:true,json:async()=>({choices:[{message:{role:'assistant',content:'Backup provider answered.'}}]})};
    });
    const result=await engine.requestModel([{role:'user',content:'hello'}],'system');
    assert.equal(result.provider,'mistral');assert.equal(result.message.content,'Backup provider answered.');
  }finally{if(oldOrder===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=oldOrder;if(oldGroq===undefined)delete process.env.GROQ_API_KEY;else process.env.GROQ_API_KEY=oldGroq;if(oldMistral===undefined)delete process.env.MISTRAL_API_KEY;else process.env.MISTRAL_API_KEY=oldMistral;}
});

test('hosted status never presents unavailable local Ollama as an active provider',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER,oldVercel=process.env.VERCEL,oldKeys=['GEMINI_API_KEY','GROQ_API_KEY','MISTRAL_API_KEY','CLOUDFLARE_API_TOKEN','CLOUDFLARE_ACCOUNT_ID','OPENROUTER_API_KEY'].map(key=>[key,process.env[key]]);
  process.env.VERCEL='1';process.env.AI_PROVIDER_ORDER='gemini,groq,mistral,cloudflare,openrouter';
  for(const key of ['GEMINI_API_KEY','GROQ_API_KEY','MISTRAL_API_KEY','CLOUDFLARE_API_TOKEN','CLOUDFLARE_ACCOUNT_ID','OPENROUTER_API_KEY'])delete process.env[key];
  try{
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')));
    const status=engine.status();
    assert.equal(status.provider,'none');assert.equal(status.model,'not configured');assert.equal(status.modelConfigured,false);
    assert.equal(status.integrations.paidProviders,'disabled');
    await assert.rejects(()=>engine.requestModel([{role:'user',content:'hello'}],'system'),/No remote free-tier AI provider is configured/);
  }finally{
    if(oldOrder===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=oldOrder;
    if(oldVercel===undefined)delete process.env.VERCEL;else process.env.VERCEL=oldVercel;
    for(const [key,value] of oldKeys)if(value===undefined)delete process.env[key];else process.env[key]=value;
  }
});

test('OpenAI provider is disabled by default even when a real key is saved',()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER,oldKey=process.env.OPENAI_API_KEY,oldEnabled=process.env.OPENAI_API_ENABLED;
  process.env.AI_PROVIDER_ORDER='openai';process.env.OPENAI_API_KEY='test-openai-key';delete process.env.OPENAI_API_ENABLED;
  try{const engine=new OperatorEngine(new Store(path.join(temp(),'data')));assert.deepEqual(engine.providers(),[]);assert.equal(engine.status().integrations.openai,false);assert.equal(engine.status().integrations.paidProviders,'disabled');}
  finally{if(oldOrder===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=oldOrder;if(oldKey===undefined)delete process.env.OPENAI_API_KEY;else process.env.OPENAI_API_KEY=oldKey;if(oldEnabled===undefined)delete process.env.OPENAI_API_ENABLED;else process.env.OPENAI_API_ENABLED=oldEnabled;}
});
test('OpenAI provider uses the official API endpoint and returns tool calls without exposing the key',async()=>{
  const oldOrder=process.env.AI_PROVIDER_ORDER,oldKey=process.env.OPENAI_API_KEY,oldEnabled=process.env.OPENAI_API_ENABLED;
  process.env.AI_PROVIDER_ORDER='openai';process.env.OPENAI_API_KEY='test-openai-key';process.env.OPENAI_API_ENABLED='true';
  try{
    let request;
    const engine=new OperatorEngine(new Store(path.join(temp(),'data')),async(url,options)=>{request={url:String(url),headers:options.headers,body:JSON.parse(options.body)};return {ok:true,json:async()=>({choices:[{message:{role:'assistant',content:'OpenAI connection works.'}}]})};});
    const result=await engine.testProvider('openai');
    assert.equal(result.ok,true);assert.equal(result.model,'gpt-6-luna');
    assert.equal(request.url,'https://api.openai.com/v1/chat/completions');
    assert.equal(request.headers.Authorization,'Bearer test-openai-key');
    assert.equal(request.body.store,false);assert.equal(request.body.max_completion_tokens,1024);
    assert.equal(JSON.stringify(result).includes('test-openai-key'),false);
  }finally{if(oldOrder===undefined)delete process.env.AI_PROVIDER_ORDER;else process.env.AI_PROVIDER_ORDER=oldOrder;if(oldKey===undefined)delete process.env.OPENAI_API_KEY;else process.env.OPENAI_API_KEY=oldKey;if(oldEnabled===undefined)delete process.env.OPENAI_API_ENABLED;else process.env.OPENAI_API_ENABLED=oldEnabled;}
});
