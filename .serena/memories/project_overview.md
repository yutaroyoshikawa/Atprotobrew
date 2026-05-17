# AtprotoBrew — Project Overview

## Purpose
Atprotobrew is a launcher application for services built on the AT Protocol. It provides an "app store" experience (`org.tarororo.brew.*` lexicons) that lets users discover and open AT Protocol-compatible web services.

## Packages (pnpm monorepo)
| Package | Root alias | Role |
|---|---|---|
| `packages/atprotobrew-app` | `pnpm app` | iOS/Android client (Expo / React Native) |
| `packages/atprotobrew-web` | `pnpm web` | Web client (React 19 + Vite + TailwindCSS v4) |
| `packages/back` | `pnpm back` | Backend (Cloudflare Worker + Hono + XRPC) |
| `packages/atproto` | `pnpm atproto` | AT Protocol Lexicon JSON definitions → TS types |
| `packages/common` | `pnpm common` | Shared UI (Tamagui), state (Jotai), data fetching (TanStack Query), i18n |

## Deployment model
Single Cloudflare Worker (`wrangler.jsonc`) that:
- Routes `/xrpc/**` to the Hono XRPC handler
- Serves everything else as a SPA from `packages/atprotobrew-web/dist/`

## AT Protocol lexicons
Custom namespace: `org.tarororo.brew`
- `storeItem` — store listing record type
- `launcher` — user launcher config record type
- `getLauncher` — XRPC query to fetch the launcher view

## i18n
LinguiJS, **source locale is Japanese (ja)**, translation target is English (en).
