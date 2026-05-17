# Task Completion Checklist

After completing any code change, do the following as applicable:

## Always
- [ ] Run `pnpm check` — Biome lint + format

## If lexicon JSON files changed
- [ ] `pnpm atproto lexgen` — regenerate TS types
- [ ] `pnpm back lexgen` — regenerate XRPC server stubs

## If design tokens changed (`tokens/*.json`)
- [ ] `pnpm sd:build` — regenerate `tokens.ts` and `variables.css`

## If i18n strings added/changed
- [ ] `pnpm <package> i18n:extract` in the affected package(s)
- [ ] `pnpm <package> i18n:compile` after translating

## If web code changed
- [ ] `pnpm web build` — verify production build compiles (tsc + Vite)

## Before deploying
- [ ] `pnpm web build` — produce fresh dist/ for the Worker to serve
- [ ] `pnpm back dev` — smoke-test locally with wrangler
