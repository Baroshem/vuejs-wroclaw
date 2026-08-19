# References

## Git History Examples

Commits from this project showing conventional commit patterns (no scope — single app, scope is not used):

```
b59d967 feat: add layout for meetup page
935c1b2 Initial commit
```

## Conventional Commits Specification

Based on [Conventional Commits](https://www.conventionalcommits.org/)

### Structure

```
<type>: <description>

[optional body]

[optional footer(s)]
```

## Project-Specific Patterns

### Common File Patterns

- `app/pages/**/*.vue` → Usually `feat` or `fix`
- `app/components/**/*.vue`, `app/components/sections/**/*.vue` → Usually `feat` or `refactor`
- `app/assets/css/**` → Usually `style` or `feat`
- `package.json`, `pnpm-lock.yaml` → Always `build`
- `.gitignore`, `eslint.config.mjs`, `nuxt.config.ts`, `tsconfig.json` → Usually `build`

## Tools

- Git: `git commit`, `git log`, `git diff`
- pnpm: `pnpm lint`, `pnpm typecheck`
