# VERIDAQ Monorepo

End-to-end stack for issuing and verifying academic credentials with ZK proofs.

## 1) Local setup

1. Install prerequisites:
   - Node.js 20+
   - pnpm 10+
   - Docker + Docker Compose
   - Foundry (`forge`, `cast`, `anvil`) for contract deployment
2. Install dependencies:
   - `pnpm install`
3. Copy env template:
   - `cp .env.example .env`
4. Start local infra (Postgres + Redis):
   - `docker compose up -d`

## 2) Pre-env simulation and quality checks

Run these before filling production secrets:

1. Build all workspaces:
   - `pnpm build`
2. Run workspace tests:
   - `pnpm test`
3. Run workflow simulation (offline dry run):
   - `pnpm simulate:workflow`

Expected simulation output includes:
- Institution onboarding (`APPROVED`)
- Claim creation
- Batch processing (`QUEUED -> PROCESSING -> SUBMITTING -> CONFIRMED`)
- Verification success + record-not-found paths
- Credential revocation state

## 3) Base Sepolia environment values

Set these in `.env`:

- `RPC_URL` = your Base Sepolia RPC endpoint
- `BUNDLER_PRIVATE_KEY` = funded deploy/relayer wallet private key
- `INSTITUTION_REGISTRY_ADDRESS`
- `CREDENTIAL_REGISTRY_ADDRESS`
- `REVOCATION_REGISTRY_ADDRESS`
- `PAYMASTER_VAULT_ADDRESS`
- `SUBSCRIPTION_MANAGER_ADDRESS`

Frontend app envs (per host) should point to backend:
- `NEXT_PUBLIC_API_URL`

## 4) Contract deployment to Base Sepolia (manual sequence)

From `packages/contracts`:

1. Build contracts:
   - `forge build`
2. Set shell vars:
   - `export RPC_URL="<base-sepolia-rpc>"`
   - `export PK="<deployer-private-key>"`
   - `export ADMIN="<platform-admin-wallet-address>"`
   - `export ENTRYPOINT="<erc4337-entrypoint-address>"`
3. Deploy `InstitutionRegistry`:
   - `forge create src/InstitutionRegistry.sol:InstitutionRegistry --rpc-url "$RPC_URL" --private-key "$PK" --constructor-args "$ADMIN"`
4. Deploy `CredentialRegistry` with institution registry address:
   - `forge create src/CredentialRegistry.sol:CredentialRegistry --rpc-url "$RPC_URL" --private-key "$PK" --constructor-args "$ADMIN" "<institution_registry_address>"`
5. Deploy `RevocationRegistry`:
   - `forge create src/RevocationRegistry.sol:RevocationRegistry --rpc-url "$RPC_URL" --private-key "$PK" --constructor-args "$ADMIN" "<institution_registry_address>" "<credential_registry_address>"`
6. Deploy `PaymasterVault`:
   - `forge create src/PaymasterVault.sol:PaymasterVault --rpc-url "$RPC_URL" --private-key "$PK" --constructor-args "$ADMIN" "$ENTRYPOINT" "<institution_registry_address>"`
7. Deploy `SubscriptionManager`:
   - `forge create src/SubscriptionManager.sol:SubscriptionManager --rpc-url "$RPC_URL" --private-key "$PK" --constructor-args "$ADMIN"`
8. Paste deployed addresses into root `.env`.

## 5) Backend deployment

1. Build API package:
   - `pnpm --filter @veridaq/api build`
2. Provision managed Postgres + Redis.
3. Apply Prisma migrations in deployment environment.
4. Set all API env vars from `.env.example`.
5. Start API process (container or Node process manager).
6. Verify health and auth endpoints.

## 6) Frontend deployment

Apps:
- `apps/portal` (institution)
- `apps/verify` (employer)
- `apps/console` (admin)

For each app (Vercel recommended):
1. Create project from repo.
2. Set root directory to app path (for example `apps/portal`).
3. Add env: `NEXT_PUBLIC_API_URL=<deployed_api_url>`.
4. Build command: `pnpm build`.
5. Deploy.

## 7) Manual data initialization

After backend and contracts are live:

1. Create platform admin account in DB.
2. Seed initial institution and employer records.
3. Approve at least one institution KYC in admin console.
4. Register institution metadata on-chain through admin workflow.
5. Top up sponsored pool and institution paymaster balances.
6. Create at least one claim definition from portal.
7. Upload first sample batch and verify status reaches `CONFIRMED`.
8. Execute one employer verification request end-to-end.

## 8) Publish to GitHub

1. Initialize and review state:
   - `git status`
2. Stage and commit:
   - `git add .`
   - `git commit -m "stabilize monorepo build, tests, and Base Sepolia docs"`
3. Create remote repo and push:
   - `git remote add origin <your-github-repo-url>`
   - `git push -u origin main`

## 9) Production checklist

- `pnpm build` passes
- `pnpm test` passes
- `pnpm simulate:workflow` passes
- Base Sepolia contract addresses set
- API reachable from all three frontends
- SMTP and storage configured
- At least one full upload + verify flow validated live
