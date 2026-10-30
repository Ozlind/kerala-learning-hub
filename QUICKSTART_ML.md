# AI Studio Operator — Quick Start (Malayalam)

## Local run
- Node.js 20+ വേണം.
- `.env.example` copy ചെയ്ത് `.env` ഉണ്ടാക്കുക.
- `npm start` run ചെയ്ത് `http://127.0.0.1:8787` തുറക്കുക.
- Local data `data/`-ലും workspace files `workspace/`-ലും സൂക്ഷിക്കും.

## Free AI providers
- **Ollama:** local model; API key വേണ്ട.
- **Gemini:** Google AI Studio free tier; quota/account eligibility മാറാം. Free-tier prompts Google product improvement-നായി ഉപയോഗിക്കപ്പെടാം.
- **Groq:** free developer tier; model-specific limits.
- **Mistral:** Studio Free mode; monthly quota.
- **Cloudflare Workers AI:** Free plan-ൽ 10,000 Neurons/day. Free-ൽ ലഭ്യമായ model മാത്രം ഉപയോഗിക്കുക.
- **OpenRouter:** `OPENROUTER_MODEL=openrouter/free` നിലനിർത്തുക; free route rate-limited ആണ്.

## Production
Vercel-ൽ `public/` static UI, `api/index.js` backend, private Vercel Blob persistence എന്നിവയാണ് ഉപയോഗിക്കുന്നത്. Owner login gate ഉണ്ട്. AI provider keys ഔദ്യോഗിക dashboard-ൽ നിന്ന് നീ തന്നെ സൃഷ്ടിച്ച് sign-in ചെയ്തശേഷം **Connect AI services** panel-ൽ നൽകാം. Keys server-side AES-256-GCM ഉപയോഗിച്ച് encrypt ചെയ്താണ് private Blob-ൽ സൂക്ഷിക്കുന്നത്.

`OPERATOR_ACCESS_TOKEN` Vercel encrypted environment variable ആയി ചേർക്കണം. `OPERATOR_ENCRYPTION_KEY` optional ആണ്; ഇല്ലെങ്കിൽ private Blob token-ൽ നിന്ന് HKDF വഴി key derive ചെയ്യും. `BLOB_READ_WRITE_TOKEN` private Blob store link ചെയ്താൽ സ്വയം ലഭിക്കും.

Production schedules background-ൽ പ്രവർത്തിക്കില്ല; recurring schedules local mode-ൽ മാത്രമാണ്. Free quotas തീർന്നാൽ paid upgrade സ്വയം നടക്കില്ല.

## Verify
```bash
npm run check
npm test
```
