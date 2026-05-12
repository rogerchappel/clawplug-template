# TASKS — V1 Clawplug Template

Follow `orchestration.md` alongside this tasks file. This repo is a GitHub template repository — it scaffolds new plugin projects when users click "Use this template".

**Status key:** `[ ]` todo | `[/]` in progress | `[x]` done

---

## Phase 1: Base Template Structure

[ ] 1.1 **Replace placeholder values**
- Find-and-replace `my-plugin` / `My Plugin` throughout for clarity
- Update `package.json`: name, description, bin entry
- Update `src/plugin.ts`: id, name, description, example greet tool

[ ] 1.2 **Verify build and test**
- `npm install`
- `npm run build` → generates adapter, CLI, manifest
- `npm test` → passes

---

## Phase 2: Example Plugin — Greet Tool

[ ] 2.1 **Implement greet tool**
- Config: `greeting` (optional string, defaults to "Hello")
- Tool: `greet` with optional `name` parameter
- `execute` returns `{ message: "Hello, World!" }`

[ ] 2.2 **Write tests**
- Test with default config
- Test with custom greeting via config override
- Test with and without name parameter

---

## Phase 3: CI Integration

[ ] 3.1 **Reference reusable SDK CI workflow**
- `.github/workflows/ci.yml` calls `rogerchappel/clawplug/.github/workflows/plugin-ci.yml@main`

[ ] 3.2 **Reference reusable SDK release workflow**
- `.github/workflows/release.yml` calls `rogerchappel/clawplug/.github/workflows/plugin-release.yml@main`

---

## Phase 4: Documentation

[ ] 4.1 **README.md**
- Clear instructions: clone → npm install → edit src/plugin.ts → npm run build
- Show the one-file plugin definition
- Document CLI usage after build
- Link to `clawplug` SDK repo
- Document file layout (source vs generated)
- Mark "Use this template" instructions prominently

[ ] 4.2 **Update `package.json` scripts**
- `build`: tsup + `clawplug-generate-cli`
- `test`: vitest with no config needed
- `bin`: `./dist/bin/my-plugin.js`

---

## Acceptance Criteria

- `npm test` passes
- `npm run build` succeeds
- `node dist/bin/my-plugin.js --help` works
- `node dist/bin/my-plugin.js greet --name World` works
- `git diff --check` passes
- Markdown renders cleanly on GitHub
- Repo marked as GitHub template
