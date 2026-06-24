# clawplug-template

Starter template for OpenClaw plugins built with `clawplug`.

This repository is meant to be copied and renamed before use. It includes a
typed example plugin, Vitest coverage, a build pipeline, and a release check
that verifies the generated package contents.

## Use This Template

1. Click **Use this template** in GitHub or copy the repository locally.
2. Replace `clawplug-template` in `package.json` with your package name.
3. Replace `example-plugin` in `src/plugin.ts` with your plugin id.
4. Replace the sample `greet` tool with your integration tools.
5. Replace the local `file:../clawplug` dependency once `clawplug` is available
   from your chosen package source.
6. Keep `"private": true` until the generated plugin is ready to publish.

## Local Setup

This template currently expects `clawplug` as a sibling checkout:

```text
parent/
  clawplug/
  clawplug-template/
```

Build the SDK first, then install and verify the template:

```sh
cd ../clawplug
npm ci
npm run build

cd ../clawplug-template
npm ci
npm run release:check
```

## Example Plugin

`src/plugin.ts` defines a typed plugin with:

- an `auth.apiKey` config section
- one `greet` tool
- a minimal `onLoad` lifecycle hook
- TypeBox parameter schemas

The test suite exercises the plugin through `testPlugin` from `clawplug/test`,
so template users can copy the test shape for their first real tool.

## Commands

```sh
npm run typecheck
npm test
npm run build
npm run package:smoke
npm run release:check
```

`release:check` runs type-checking, tests, the build, and `npm pack --dry-run`.

## Safety Boundaries

This repository is a starter template, not a production plugin as-is. Replace sample tool names, package metadata, credentials, and the local `file:../clawplug` dependency before publishing or deploying a derived plugin, and review the packed tarball before enabling external users.

## Release Notes

Do not publish this repository as-is. Before publishing a generated plugin:

- change the package name, repository, bugs URL, and homepage
- replace the example plugin id, display name, and tool
- replace the local `file:../clawplug` dependency
- review the dry-run tarball contents from `npm run package:smoke`

## Release Verification

Before publishing or tagging a release, run the same verification path used by CI:

- `npm run release:check`
- `npm run package:smoke`

See `docs/release-readiness.md` for the package surface, CLI bins, and reviewer checklist.
