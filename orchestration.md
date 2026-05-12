# Orchestration — Clawplug Template

## How to Work Through Tasks

When you pick up `TASKS.md`:

1. **Read this file first** — understand constraints before touching code
2. **Follow `TASKS.md` in order** — the template is simpler than the SDK, phases should flow sequentially
3. **Verify at each step** — run `npm test` and `npm run build` after every change
4. **Commit after each phase** — one phase per commit

## Constraints

- **MIT license** — don't change it
- **Keep it minimal** — this is a starter template, not a full example. Show the pattern, not every possible feature.
- **No generated files in git** — `dist/`, `openclaw.plugin.json` must stay in `.gitignore`
- **SDK dependency** — `package.json` must reference the `clawplug` SDK. Use `file:../clawplug` for local development, update to `clawplug` from npm before pushing to a template repo.

## Phase Dependencies

- Phase 1 must be done first (base structure, verify build/test)
- Phase 2 depends on Phase 1 (implement greet tool + tests)
- Phase 3 depends on Phase 2 (CI uses the working template)
- Phase 4 can be done in parallel with Phases 2-3 (documentation)

## Commit Convention

Use conventional commits: `feat: implement greet tool`, `ci: add reusable CI workflow reference`, `docs: update README`

## PR Guidance

- Open a PR when all phases are complete
- Include in PR description: build status, test count, `--help` output
- Do not push directly to `main` if branch protection is enabled
