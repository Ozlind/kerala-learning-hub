# AI Studio Operator — Quick Start (Malayalam)

## 1. ആവശ്യമുള്ളത്

- Node.js 20 അല്ലെങ്കിൽ പുതിയത്.
- PC/Laptop-ൽ local AI വേണമെങ്കിൽ Ollama.
- Remote free-tier API ഉപയോഗിക്കണമെങ്കിൽ provider-ൽ നിന്ന് സ്വന്തം API key.

## 2. ആരംഭിക്കുക

```bash
cp .env.example .env
npm start
```

ശേഷം browser-ൽ `http://127.0.0.1:8787` തുറക്കുക.

## 3. ഏത് provider ഉപയോഗിക്കണം?

- **Ollama:** local model download ചെയ്ത് `OLLAMA_MODEL` ക്രമീകരിക്കുക. Inference നിങ്ങളുടെ device-ൽ തന്നെ നടക്കും; ആദ്യ model download-ന് data വേണം.
- **Google AI Studio:** `.env`-ൽ `GEMINI_API_KEY` ചേർക്കുക.
- **Groq:** `.env`-ൽ `GROQ_API_KEY` ചേർക്കുക.
- **Cerebras:** `.env`-ൽ `CEREBRAS_API_KEY` ചേർക്കുക.
- **OpenRouter:** `.env`-ൽ `OPENROUTER_API_KEY` ചേർക്കുക; `OPENROUTER_MODEL=openrouter/free` അതേപടി നിലനിർത്തുക.

`AI_PROVIDER_ORDER` ആണ് fallback ക്രമം നിയന്ത്രിക്കുന്നത്. Key ഇല്ലാത്ത remote provider സ്വയം skip ചെയ്യും. ഒരു provider പരാജയപ്പെട്ടാൽ അടുത്ത configured provider ശ്രമിക്കും. Paid provider-ലേക്ക് fallback ഇല്ല.

## 4. പ്രധാന സുരക്ഷാ കുറിപ്പുകൾ

- API keys `.env`-ൽ മാത്രം സൂക്ഷിക്കുക; chat-ലോ frontend-ലോ paste ചെയ്യരുത്.
- `.env` GitHub-ലേക്ക് commit ചെയ്യരുത്.
- Provider account-ൽ billing enable ചെയ്യരുത്; free-tier മാത്രം ഉപയോഗിക്കുക.
- Free quotas സ്ഥിരമല്ല; limit കഴിഞ്ഞാൽ ആ provider പരാജയപ്പെടുകയും അടുത്ത configured provider ശ്രമിക്കുകയും ചെയ്യും.
- App `127.0.0.1`-ൽ മാത്രം പ്രവർത്തിക്കും. Public hosting/deployment ചെയ്തിട്ടില്ല.

## 5. പരിശോധിക്കുക

```bash
npm test
npm run check
```
