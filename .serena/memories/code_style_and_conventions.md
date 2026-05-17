# Code Style and Conventions

## Formatting and linting
- **Biome** is the single tool for both lint and format. Config: `biome.json` (extends `shared/biome.jsonc`).
- Run: `pnpm check` (writes changes to staged files).
- Auto-generated lexicon files (`**/lexicons/**/*.ts`) are excluded from linting.
- Some rules are relaxed project-wide: `noBannedTypes: off`, `noStaticOnlyClass: off`, `noUnknownAtRules: off`.

## TypeScript
- All packages use `"type": "module"` (ESM).
- Explicit types on exported functions and public APIs; infer obvious locals.
- Use `interface` for object shapes, `type` for unions/intersections/utilities.
- Avoid `any`; use `unknown` for external input and narrow safely.
- No `console.log` in production code.

## React / components
- Component files: `.tsx`, PascalCase filenames.
- Hooks: `use` prefix, camelCase.
- No `React.FC` unless specifically needed.
- Props defined as named `interface` or `type`.

## Immutability
- Always create new objects; never mutate existing ones (spread operator for updates).

## Common package imports
Use subpath exports, e.g.:
- `@atprotobrew/common/core/components/Foo`
- `@atprotobrew/common/core/stores/languageStore`
- `@atprotobrew/common/auth/components/Bar`
- `@atprotobrew/common/theme`
- `@atprotobrew/common/i18n/locales/ja`

## Naming
- Components/types/interfaces: PascalCase
- Variables/functions/hooks: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: kebab-case
