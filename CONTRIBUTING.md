# Contributing

Thanks for improving `clawplug-template`.

## Local Setup

This template expects a sibling `clawplug` checkout while the SDK dependency is local:

```bash
cd ../clawplug
npm install
npm run build

cd ../clawplug-template
npm install
npm run release:check
```

## Pull Requests

- Keep template defaults generic and safe to copy.
- Update README instructions when setup or release commands change.
- Run `npm run release:check` before opening a PR.
- Do not add real credentials, tenant-specific endpoints, or private plugin metadata.
