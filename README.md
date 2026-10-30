# AI Studio Operator

A private, single-owner AI workbench with a free-first model router, safe workspace tools, projects, notes, tasks, memories, approvals, run history, audit records, and persistent data.

## Local run

- Node.js 20+
- Copy `.env.example` to `.env`.
- Run `npm start` and open `http://127.0.0.1:8787`.
- Local data is stored in `data/`; the isolated workspace is `workspace/`.

## Free-first AI providers

- **Ollama** — local inference, no API key.
- **Google AI Studio** — Gemini free tier; quotas and eligibility vary. Google may use free-tier prompts to improve products.
- **Groq** — developer/free tier with model-specific rate limits.
- **Mistral** — Studio Free mode, account-specific monthly quotas.
- **Cloudflare Workers AI** — Free plan includes 10,000 Neurons/day; choose a model available on Free.
- **OpenRouter** — keep `OPENROUTER_MODEL=openrouter/free`; free models are rate-limited.

Create your own keys through official provider dashboards. This app does not scrape, reuse, or embed exposed keys from public repositories. It does not create provider accounts or mint credentials on your behalf. Cerebras is excluded from the free-only route because its current promotional offer requires a payment method and is not a permanent no-card tier.

Official setup: [Gemini](https://aistudio.google.com/app/apikey) · [Groq](https://console.groq.com/keys) · [Mistral](https://console.mistral.ai/api-keys/) · [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) · [OpenRouter](https://openrouter.ai/settings/keys).

## Free utility APIs

- **Open-Meteo** weather/geocoding without a key (non-commercial hosted API; attribute the data).
- **Frankfurter** reference exchange rates without a key.

## Vercel deployment

Production uses a static UI from `public/`, a Node.js function at `api/index.js`, and a private Vercel Blob store in Singapore (`sin1`) for persistent state.

Required encrypted Vercel environment variables:
- `OPERATOR_ACCESS_TOKEN` — owner login secret (required).
- `OPERATOR_ENCRYPTION_KEY` — optional 64-hex-character key. If omitted, a key is derived with HKDF from the private Blob token.
- `BLOB_READ_WRITE_TOKEN` is attached automatically when the private Blob store is linked.

Sign in through the in-app login gate. Add your own provider keys in **Connect AI services**; they are encrypted server-side before being saved in private Blob. The browser never receives saved key values. Sessions expire after 12 hours.

The backend uses ETag-conditional Blob writes to avoid silently overwriting concurrent updates. Vercel Hobby Blob usage is limited; the application does not enable billing, paid model fallback, or auto top-ups. If the included free allowance is exhausted, persistence requests can fail rather than upgrade the plan.

## Security boundaries

- Same-origin checks, HttpOnly/SameSite session cookie, login throttling, request limits, CSP and security headers.
- Provider secrets encrypted with AES-256-GCM; secrets are not exported or returned to the UI.
- Workspace file tools are local-only and reject path traversal/symlink escapes.
- GitHub integration remains read-only.
- Recurring schedules run only in local mode; no background execution is claimed on Vercel.
- No paid model providers, paid fallback, automated public commits, or production writes.

## Verify

```sh
npm run check
npm test
```
