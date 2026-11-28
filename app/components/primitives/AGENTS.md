# app/components/primitives/

Domain-agnostic only: no imports of `data/`, no meetup wording, no i18n keys except `common.*`.

- Styling comes from props and the caller's `class`; spacing around the component is the caller's job.
- `QuestionMarkBadge` is `aria-hidden` — always pair it with visible text.
