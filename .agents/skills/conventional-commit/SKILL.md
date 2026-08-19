---
name: conventional-commit
description: Create conventional commits based on project patterns. Use when you need to commit changes following the repository's commit message conventions.
---

# Conventional Commit

Automate conventional commit creation following this project's patterns and conventions.

## Commit Types

Based on project git history, use these types:

- `feat`: New feature or enhancement
- `fix`: Bug fix
- `refactor`: Code restructuring without changing behavior
- `build`: Build system, dependencies, tooling/lint/CI config, or deployment changes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons)
- `test`: Adding or modifying tests
- `perf`: Performance improvements

> Avoid `chore` — pick the most specific type. `build` covers tooling/lint/CI config, `docs` covers documentation, `refactor` covers code cleanup, `style` covers formatting-only. If nothing else fits, `refactor` is usually the right call.

## Commit Message Pattern

```
<type>: <description>
```

- **type**: Required - one of the types above
- **description**: Required - concise summary in imperative mood

### Examples

```
feat: add layout for meetup page
fix: correct speaker card spacing on mobile
refactor: extract shared card component
build: update dependencies
docs: document skill setup
```

## Instructions

1. **Check current state**:

   ```bash
   git status --porcelain
   git diff --staged
   git diff
   ```

2. **Never commit working artifacts.** Ephemeral planning/scratch files stay out of version control — they get acted on, then deleted, so committing them pollutes history and leaves durable docs linking to files that will vanish. Before staging, drop them:

   ```bash
   git diff --staged --name-only \
    | grep -Ei '^tmp/|-(plan|todo|progress|analysis|handoff|brief|implementation|steps|notes)[^/]*\.md$' \
     || echo "no artifacts staged"
   ```

3. **Run lint check**:

   ```bash
   pnpm lint
   ```

   If lint fails, review errors and either fix them or inform the user before committing.

4. **Check for comments in staged files**:

   Search for code comments (single-line `//` and multi-line `/* */`) in staged files:

   ```bash
   git diff --staged --name-only | xargs -I {} sh -c 'git show ":{}" 2>/dev/null | grep -n -E "(^\s*//|/\*|\*/)" > /dev/null && echo "{}"'
   ```

   If comments are found:
   - List all files containing comments
   - Show the comments to the user with line numbers
   - Ask the user if they want to proceed with the commit or review/remove the comments first

5. **Stage changes** (if needed):

   ```bash
   git add <files>
   ```

6. **Analyze changes**:
   - Review file types and locations
   - Identify the primary change category

7. **Determine commit type**:
   - New UI/feature → `feat`
   - Bug fix → `fix`
   - Code cleanup → `refactor`
   - package.json, pnpm-lock.yaml → `build`
   - Tooling / lint / build config (eslint, tsconfig, tailwind, nuxt config, CI) → `build`
   - README, docs → `docs`

8. **Create commit message**:
   - Start with type
   - Write concise description in imperative mood
   - Keep it under 72 characters
   - No period at the end
   - Focus on what and why, not how

9. **Execute commit**:

   ```bash
   git commit -m "<type>: <description>"
   ```

10. **Verify**:

    ```bash
    git log -1 --oneline
    git status
    ```

## Atomic Commits

- One concern per commit. If a change bundles a bug fix, a rename, and a feature, split it.
- When multiple files change, group them by intent, not by file proximity. Files touched by a mechanical codemod (e.g. `eslint --fix`) belong together in one commit; a feature added incidentally alongside doesn't.
- If a single file mixes two concerns, split them via `git checkout HEAD -- <file>` + selective re-apply with Edit (or `git add -p`). Don't force-fit mixed changes under one message.
- Before committing, run `git diff --stat` and ask: "would each line here justify the commit message on its own?" If not, that line belongs in a different commit.

### Tests land in their own commit, right after the feature

Test files never ride along in the same commit as the source they cover. Commit the feature first, then its tests in the very next commit:

```
feat: add meetup speaker list        # source only
test: cover speaker list rendering   # *.test.ts / *.spec.ts following the feat
```

- **Order is fixed: `feat`/`fix`/`refactor` first, `test` immediately after.** The source commit must stand without its tests; the test commit then exercises it. Never the reverse — a `test` commit that precedes its source won't compile.
- **Split source from tests even when they were written together.** When staging a feature, exclude every `*.test.ts` / `*.spec.ts` (and e2e specs) from the source commit and stage them into the following `test(...)` commit.
- **A pure test change** (adding coverage, fixing a flaky test, no source change) is a standalone `test:` commit as usual.

## Edge Cases

### Work in Progress

Note it directly in the description:

```bash
git commit -m "feat: add speaker filtering (wip)"
```

### Multiple Change Types

If changes span multiple types, either:

- Split into multiple commits (preferred)
- Use the most significant change type

### Dependency Updates

```bash
git commit -m "build: update dependencies"
```

### Breaking Changes

Add `BREAKING CHANGE:` in commit body:

```bash
git commit -m "feat: update page routing

BREAKING CHANGE: /meetup route renamed to /event"
```

## Verification Checklist

- [ ] No working artifacts staged (plans, briefs, todos, analysis)
- [ ] Tests split from their source into a following `test:` commit (feat/fix/refactor first, test right after)
- [ ] Lint passed without errors
- [ ] Checked for comments in staged files
- [ ] User confirmed to proceed (if comments found)
- [ ] Commit message follows pattern: `<type>: <description>`
- [ ] Type is one of the approved types
- [ ] Description is in imperative mood
- [ ] Message is under 72 characters
- [ ] No sensitive information included
- [ ] Commit was created successfully
- [ ] No co-author added to commit message

## Common Mistakes to Avoid

- Using past tense ("added feature" → "add feature")
- Too vague ("update code" → "add validation to user input")
- Too long (keep it concise)
- Missing type prefix
- Including "and" (split into multiple commits)

## References

See [references.md](references.md) for git history examples and project-specific patterns.
