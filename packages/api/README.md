# @veridaq/api deployment notes

## Can this backend run on Vercel?

Partially.

- HTTP API routes can run as Vercel Functions.
- Always-on BullMQ workers cannot run on Vercel because Vercel Functions are request-driven and ephemeral.

With the current architecture, use one of these:

1. **Recommended:** Frontends on Vercel, API + worker on a service that supports long-running processes.
2. **MVP fallback:** API on Vercel and temporarily disable queue-dependent flows (batch processing) until a worker host is added.

## Minimum production requirements (current code)

- Postgres (managed)
- Redis (managed)
- API process
- Worker process (`pnpm --filter @veridaq/api worker`)

## If you still deploy API on Vercel

- Keep Postgres/Redis external.
- Set all API env vars in Vercel project settings.
- Expect queue jobs to stall unless a worker runs elsewhere.
