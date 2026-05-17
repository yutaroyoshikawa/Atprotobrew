# Suggested Commands

## Root
```sh
pnpm check          # Biome lint + format (staged files)
pnpm sd:build       # Compile design tokens: tokens/*.json → packages/common/src/styles/
```

## Backend (packages/back)
```sh
pnpm back dev           # Cloudflare Worker dev server (wrangler dev)
pnpm back lexgen        # Generate Hono XRPC server stubs from lexicon JSON
pnpm back cf-typegen    # Regenerate Cloudflare bindings type file
```

## Web (packages/atprotobrew-web)
```sh
pnpm web dev            # Vite dev server
pnpm web build          # tsc + Vite production build → dist/ (consumed by wrangler)
pnpm web i18n:extract   # Extract LinguiJS message catalog
pnpm web i18n:compile   # Compile message catalog to TS
```

## Mobile app (packages/atprotobrew-app)
```sh
pnpm app start          # Expo dev server
pnpm app ios            # iOS simulator
pnpm app android        # Android emulator
pnpm app i18n:extract
pnpm app i18n:compile
```

## AT Protocol (packages/atproto)
```sh
pnpm atproto lexgen     # Generate TS types from lexicon JSON files
```

## Common (packages/common)
```sh
pnpm common i18n:extract
pnpm common i18n:compile
```

## Lexicon change workflow
1. Edit JSON in `packages/atproto/lexicons/`
2. `pnpm atproto lexgen` → regenerates `packages/atproto/src/lexicons/`
3. `pnpm back lexgen` → regenerates `packages/back/src/lexicons/`
