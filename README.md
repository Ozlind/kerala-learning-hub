# AI Studio Operator

A private, local-first operator workbench. It has a free-only AI provider router, a strict local tool registry, persistent memory, run history, approval records, local schedules and an append-only audit log. No paid model provider or paid fallback is implemented.

## Run locally

- Node.js 20+
- Copy `.env.example` to `.env` and add only the free-tier API keys you actually want to use.
- Run `npm start`, then open `http://127.0.0.1:8787`.
- No npm packages or database are required. `.env` is loaded automatically; shell environment variables take precedence.

## AI providers

Providers are attempted in `AI_PROVIDER_ORDER`. The default order is local Ollama, Google AI Studio, Groq, Cerebras, then OpenRouter. A remote provider is skipped unless its key is present. If a provider fails (including rate limits), the next configured provider is tried. No OpenAI API, paid model, paid fallback, or automatic top-up is supported.

| Provider | Configuration | Default model | Notes |
|---|---|---|---|
| Ollama | `OLLAMA_BASE_URL`, `OLLAMA_MODEL` | `qwen2.5:3b` | Local inference; install Ollama and download a model separately. |
| Google AI Studio | `GEMINI_API_KEY`, `GEMINI_MODEL` | `gemini-2.5-flash` | Free quota is account/model/region dependent; Google currently restricts 2.5 model access to users who actively used them previously. Newer 3.8 Flash is not a zero-cost replacement. |
| Groq | `GROQ_API_KEY`, `GROQ_MODEL` | `openai/gpt-oss-20b` | Free developer access has model-specific rate limits. |
| Cerebras | `CEREBRAS_API_KEY`, `CEREBRAS_MODEL` | `llama3.1-8b` | Free tier has lower limits than paid tiers. |
| OpenRouter | `OPENROUTER_API_KEY`, `OPENROUTER_MODEL` | `openrouter/free` | Uses OpenRouter's free-model router; do not change to a paid model slug if keeping the zero-cost policy. |

Provider model IDs and free quotas can change. The default Gemini model is retained only as a compatibility option; Google currently recommends newer models for new projects, but the latest 3.8 Flash has paid token pricing, so this free-first build does not silently switch to it. The model can be overridden in `.env`; the app does not promise unlimited use. A configured API key is not proof that the provider is reachable: the health panel labels key presence separately from live reachability. OpenRouter's current free variants are rate-limited (currently 20 requests/minute and 50/day without a qualifying credit purchase); this project never buys credits or enables auto-top-up. Keys remain server-side and are never returned by the status endpoint. Never commit `.env`.

Official key/setup pages: [Ollama](https://ollama.com/download) · [Google AI Studio](https://aistudio.google.com/app/apikey) · [Groq](https://console.groq.com/keys) · [Cerebras](https://cloud.cerebras.ai/) · [OpenRouter](https://openrouter.ai/settings/keys). Use free-tier access only; do not enable billing or choose paid model IDs if the zero-cost constraint must remain strict.

## Included capabilities

- Multi-provider free-only routing with fallback and provider usage recorded per run.
- Local Ollama support and Google Gemini, Groq, Cerebras and OpenRouter adapters.
- Allow-listed local workspace read/write/list tools with path traversal and symlink protection and 100 KB file limits.
- Persistent memories, run history, approvals, a three-stage task board and audit events stored locally.
- Task board can be edited manually or by the AI agent; task status and priority are validated server-side.
- Individual saved memories can be deleted from the UI.
- One-click JSON export includes local state and the latest 500 audit events.
- Approval requests for consequential actions; approving an item records the decision but does not execute the action.
- Local recurring schedules (15 minutes to 7 days). Schedules run only while this local process is running.
- Read-only GitHub repository metadata and issue lookup.
- Open-Meteo weather and Frankfurter reference currency conversion, without an API key.
- Provider health/configuration overview that does not mistake a saved API key for a verified live connection, request timeout, localhost-only bind, same-origin checks, basic request rate limit and security headers.

## Explicit exclusions

- No paid model provider, OpenAI API key, paid fallback, or credit-based automatic routing.
- Metered Firecrawl search/scrape is disabled and not exposed as an AI tool.
- No browser automation, cloud deployment, Vercel/Supabase/PostHog integration or public hosting is claimed.
- ChatGPT-connected plugin credentials are not automatically available to this standalone app. Configure separate provider keys in the local `.env` file.
- Do not expose this server to the public network. Free quotas and third-party data terms vary; review each provider's terms before sending sensitive material.

## Data locations

- `data/state.json` — runs, memories, approvals, schedules and tasks.
- `data/audit.jsonl` — append-only audit events.
- `workspace/` — files the model can access.
- `.env` — local secrets; keep private and out of version control.

## Verify

```sh
npm test
npm run check
```

## Local API additions

- `GET /api/tasks` — list task-board items.
- `POST /api/tasks` — create a task (`title`, optional `details`, `priority`).
- `PATCH /api/tasks/:id` — update task title, details, priority or status (`todo`, `doing`, `done`).
- `DELETE /api/tasks/:id` — delete a task.
- `DELETE /api/memories/:id` — delete one saved memory.
- `GET /api/export` — download a JSON backup of state and the latest 500 audit events.

All routes remain localhost-only and use the same request-size, origin and rate-limit protections as the rest of the local API.

## Expanded workspace features

- Project workspaces with active/paused/archived lifecycle states.
- Project-linked and general notes with create, edit, delete, and cascade deletion when a project is removed.
- Unified local search across projects, notes, tasks, memories, and run summaries (`GET /api/search?q=...`).
- JSON export schema version 2 includes project and note data.

Project and note data is stored locally in `data/state.json`. The app remains bound to loopback; do not expose this server directly to the public internet.
