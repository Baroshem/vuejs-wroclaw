# app/

Edition pages (`pages/2026.vue`, `2027.vue`) only build an `Edition` object and render `<EditionPage>`.

## Adding an edition

1. Data factory in `data/editions/<year>.ts`; widen `Edition['slug']` in `types.ts`.
2. Copy under `editions.<year>.*` in both locale files.
3. `pages/<year>.vue` (copy `2027.vue`), entry in `utils/editions.ts`, `EDITIONS` in `plugins/transitions.client.ts`, prerender routes in `nuxt.config.ts` (plain and `/en/...`), and a `.planet-<year>` theme in `main.css` if it needs its own accent.
