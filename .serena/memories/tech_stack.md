# Tech Stack

## Language
TypeScript throughout (all packages). `"type": "module"` in all packages.

## Frontend
- **React 19** (both web and app, overridden via pnpm workspace)
- **React Native 0.83** + **Expo SDK 55** (mobile)
- **Vite 8** + **TailwindCSS v4** (web)
- **Tamagui 2.0.0-rc** — cross-platform UI components and theming (shared in `common`)
- **Jotai** — atom-based global state
- **TanStack Query** — server state / data fetching
- **TanStack Form** — form state
- **React Router DOM v7** (web)
- **Expo Router** (app)

## Backend
- **Cloudflare Workers** runtime
- **Hono** — HTTP framework
- **@evex-dev/xrpc-hono** — XRPC (AT Protocol RPC) server adapter for Hono
- **Drizzle ORM** + **Cloudflare D1** (SQLite) — database
- **Wrangler 4** — dev/deploy tooling

## AT Protocol
- `@atproto/lexicon`, `@atproto/lex` — lexicon tooling
- `@atproto/crypto` — cryptographic primitives (secp256k1 JWT verification)
- `@atproto/identity` — DID resolution with MemoryCache
- `@atproto/xrpc-server` — XRPC server primitives
- `@atpassport/client` (common) — AT Protocol OAuth client

## i18n
- **LinguiJS v6** — message extraction and compilation
- Source locale: **ja** (Japanese); target: **en** (English)

## Design tokens
- **Style Dictionary v5** — `tokens/*.json` → TS constants + CSS custom properties
- Outputs: `packages/common/src/styles/tokens.ts` and `variables.css`

## Tooling
- **pnpm 10** workspaces
- **Biome 2.2.3** — lint + format (replaces ESLint + Prettier)
- **TypeScript ~6** (web, common) / **^5.9** (app)
