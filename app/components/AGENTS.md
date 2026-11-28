# app/components/

Folders group by domain. Components are **not auto-imported**: import each one with its full path (`import SectionHero from '~/components/hero/SectionHero.vue'`). Moving a file means updating its importers (`pnpm build` catches misses).

## Rules

- `EditionPage.vue` is the only component that knows an `Edition`. `Section*` components are presentational: props only, never import edition data. Empty data renders `?` placeholders (`PlaceholderCard`, `QuestionMarkBadge`).
- Put a component next to the section that owns it. Top level only when 2+ domains use it; `primitives/` only when it knows nothing about meetup content.
- Cards share `rounded-xl border border-white/10 bg-panel` — reuse it instead of inventing new surfaces.
- Do not remove or rename the `data-*` view-transition hooks (see `assets/css/AGENTS.md`).
