# app/data/

Typed content, no Vue components.

- `editions/types.ts` is the contract with `EditionPage` — change it first when a section needs new fields.
- Factories `createEditionXXXX(t, locale?)` hold **names, photos, logos, URLs**; every visible sentence is an i18n key under `editions.<year>.*`.
- String arrays live in locale files as `key.0`, `key.1`, … and are read with `list(t, key, length)`. The length is hardcoded in the factory — keep it in sync with the locales.
- Unannounced data = empty array / missing field (sections render `?`). Disabled CTAs: `{ label: soon(...), disabled: true }` (see `2027.ts`).
- `gallery.ts`: **order matters** — entries 1 and 10 render as large tiles. `id` maps to `gallery.alts.<id>` in both locales; the file lives in `public/gallery/`.
- URLs shared across editions go to `app/utils/links.ts`.
