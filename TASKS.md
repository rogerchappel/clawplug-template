# TASKS — V1 Clawplug Template

Follow `orchestration.md` alongside this tasks file. This repo is a GitHub template repository — it scaffolds new plugin projects when users click "Use this template".

**Status key:** `[ ]` todo | `[/]` in progress | `[x]` done

Checklist status below is verified against the current scaffold source and tests; completed items describe the existing template, not work required from adopters.

---

## Phase 1: Base Template Structure

[x] 1.1 **Replace placeholder values**
- Package is named `clawplug-template`; plugin metadata uses `example-plugin` / `Example Plugin`. Adopters should replace these sample values when creating a real plugin.
- `package.json` contains the template name and description; generated CLI naming is handled by the SDK tooling.
- `src/plugin.ts` defines the example plugin metadata and greet tool.

[ ] 1.2 **Verify build and test**
- CI is configured to install the SDK and template dependencies, then run `npm run release:check`. Local verification requires the sibling `clawplug` checkout; the standalone install lacks that `file:../clawplug` dependency.

---

## Phase 2: Example Plugin — Greet Tool

[/] 2.1 **Implement greet tool**
- `src/plugin.ts` implements `greet` with a required `name` and returns greeting text using the sample `Hello` prefix. It does not define a configurable greeting or default name.`

[/] 2.2 **Write tests**
- `tests/plugin.test.ts` exercises the named greet tool through `testPlugin`; there is no coverage for custom greeting configuration or omitted name because neither is implemented.

---

## Phase 3: CI Integration

[/] 3.1 **Reference reusable SDK CI workflow**
- `.github/workflows/ci.yml` checks out both repositories and runs the SDK/template release check directly; it does not call the reusable `plugin-ci.yml` workflow.

[ ] 3.2 **Reference reusable SDK release workflow**
- No `.github/workflows/release.yml` exists in this template; decide whether a reusable release workflow is appropriate before adding one.

---

## Phase 4: Documentation

[/] 4.1 **README.md**
- Clear instructions: clone → npm install → edit src/plugin.ts → npm run build
- Show the one-file plugin definition
- Document CLI usage after build
- Link to `clawplug` SDK repo
- Document file layout (source vs generated)
- Mark "Use this template" instructions prominently

[/] 4.2 **Update `package.json` scripts**
- Current scripts include `build: tsup`, `test: vitest run`, `typecheck`, `check`, `lint`, `smoke`, `package:smoke`, and `release:check`. The current package metadata does not declare a `bin` entry.

---

## Acceptance Criteria (scaffold baseline)

- CI runs `npm run release:check` against the SDK sibling checkout; standalone verification here is blocked because the sibling SDK checkout is unavailable.
- The generated CLI name and commands are SDK-dependent; confirm them from current `package.json`/CLI tooling rather than assuming `my-plugin`.
- GitHub-hosted template status is repository metadata, not verified from source files here.
