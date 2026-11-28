# Vue.js Wrocław — agent map

Meetup site. Nuxt 4 + Nuxt UI 4 + Tailwind 4, i18n (pl default at `/`, en under `/en`), prerendered, Vercel. pnpm only.

Before changing files in a folder, read its `AGENTS.md` (`app/`, `app/components/`, `app/components/primitives/`, `app/data/`, `app/assets/css/`, `i18n/`).

Never edit generated dirs: `.nuxt/`, `.output/`, `tmp/`, `node_modules/`. Do not edit or commit `.agents/skills/` unasked.

## Public assets

`public/` ships to production — no documentation files in it (hence no `AGENTS.md` there). Reference files by absolute path (`/speakers/x.jpg`), never import them.

- `gallery/meetup-NN.webp` → `app/data/gallery.ts`; `speakers/*.jpg`, `sponsors/*` → `app/data/editions/<year>.ts`.
- `event.ics` (pl) / `event.en.ics` → name built from locale (`/event.<locale>.ics`, pl has no suffix).
- `og-image.jpg` (1200×630), favicons, `vuejs-wroclaw.svg` → linked in `app/app.vue`.
- Delete a file when its reference goes away. Prefer `.webp` for photos.

## Commands

```bash
pnpm dev        # :3000
pnpm check      # lint + typecheck + knip (run before finishing)
pnpm lint:fix   # eslint --fix + knip --fix
pnpm build      # prerendered build; also catches broken component paths
```

Known: `pnpm typecheck` fails on `process` in `nuxt.config.ts` (missing node types) — pre-existing.

## Conventions

- Conventional Commits (see `.agents/skills/conventional-commit`). Lint style: no trailing commas, 1tbs.
- Our own components, composables and utils are imported **explicitly** (`~/components/...vue`, `~/composables/...`, `~/utils/...`); auto-import of them is off (`nuxt.config.ts`). Vue/Nuxt/module ones (`ref`, `useI18n`, `NuxtLink`, `UButton`) stay auto-imported. Knip therefore sees real usage.
- Copy never lives in components or data files: use i18n keys.
- Edition content flows one way: `data/editions/*` → `EditionPage` → section components via props.
- Respect `prefers-reduced-motion`; keep a11y (`vuejs-accessibility` lint).

## Maintaining AGENTS.md files

After a larger change (new folder, moved files, changed contract or convention), check whether the relevant `AGENTS.md` is now wrong or missing a trap, and fix it. Skip it for minor changes.

- Add a line only if it is a non-obvious rule, trap or hidden coupling that cannot be read from the code, and a future agent would likely get it wrong without it.
- Do not document what `ls`, the code or git history already show: file lists, component purposes, one-off fixes, what you just did.
- Prefer editing or deleting an existing line over appending. Remove lines the change made obsolete.
- Keep each fact in one file; link instead of repeating. Do not create an `AGENTS.md` for a folder unless it holds rules that don't fit its parent's.
