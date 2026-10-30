# Production deployment notes

The production build is gated by `npm run check && npm test`. Vercel installs dependencies, runs the full Node syntax checks and test suite, then serves the static UI from `public/` and the API function from `api/index.js`.

Required Vercel Production secrets:
- `OPERATOR_ACCESS_TOKEN`
- `OPERATOR_ENCRYPTION_KEY` is optional; the backend derives it from the private Blob token with HKDF when omitted.
- `BLOB_READ_WRITE_TOKEN` (linked private Blob store)

Free model providers are optional and must be configured by the owner in the encrypted provider vault. Do not commit API keys or add provider credentials to GitHub Actions.

The Vercel Hobby project has no paid fallback or automatic billing. Schedules are local-only; serverless invocations are not a persistent background worker.
