---
name: conventional-commit
description: Use when creating a git commit, to write the message in this repo's Conventional Commits format.
---

# Conventional Commit

Format: `<type>: <description>` — no scope.

## Types

- `feat`: new feature or enhancement
- `fix`: bug fix
- `refactor`: restructuring without behavior change
- `build`: dependencies, tooling, lint/CI/deploy config
- `docs`: documentation
- `style`: formatting or visual styling only

Use only the types listed above, no others. Pick the most specific one; if nothing fits, use `refactor`.

## Description

- Imperative mood ("add", not "added")
- Under 72 characters, no trailing period
- Say what and why, not how
- No "and" — split into separate commits instead

## Rules

- One concern per commit; group files by intent.
- Breaking change: add `BREAKING CHANGE: ...` in the body.

## Examples

```
feat: add layout for meetup page
fix: correct speaker card spacing on mobile
refactor: extract shared card component
build: update dependencies
docs: document skill setup
```
