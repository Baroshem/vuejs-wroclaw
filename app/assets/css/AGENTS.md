# app/assets/css/

- Use tokens (`bg-panel`, `text-slate`, `bg-accent`), not raw hex: editions re-theme via `.planet-<slug>` in `main.css`.
- Tokens look unused to grep because they are consumed as Tailwind utilities — do not delete them on that basis.
- Wrap animations in `prefers-reduced-motion: no-preference`; both files have a `reduce` block — extend it when adding motion.
- `transitions.css` (view transition) hooks into `data-site-nav`, `data-tab-bar`, `data-cosmos`, `data-ui`, `data-sigil`, `data-copy` attributes and `<html data-vt-move>`. Never remove or rename them; when editing transitions also check the components carrying them, `plugins/transitions.client.ts` and `useSpaceTravel`.
