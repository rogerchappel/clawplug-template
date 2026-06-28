# Template Adoption Checklist

Use this checklist after copying `clawplug-template` into a new plugin
repository.

## Package Identity

- Rename the package in `package.json`.
- Replace the repository, bugs URL, and homepage with the new repository.
- Keep `"private": true` until the plugin id, metadata, tests, and package
  contents have been reviewed.

## Plugin Identity

- Replace `example-plugin` in `src/plugin.ts`.
- Replace the display name and description with user-facing plugin language.
- Replace the sample `greet` tool with the first real integration tool.
- Add or update tests for each exported tool and config path.

## Dependency Surface

- Replace `file:../clawplug` with the intended SDK source before publishing.
- Run `npm ci` from a clean checkout after changing dependencies.
- Review `npm pack --dry-run` output for local paths, generated files, and
  private fixtures.

## Release Verification

Run the full release check before opening a release PR:

```sh
npm run release:check
```

Record the command result and any intentional skips in the PR body.
