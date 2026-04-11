# Deploy

Portfolio hosted on **Cloudflare Pages** at [josuehoenicka.com](https://josuehoenicka.com).

Cloudflare project name: `josuehoenicka-portfolio`

## Prerequisites

- Node.js
- Angular CLI (`npx ng`)
- Wrangler CLI (`npx wrangler`) — comes with `wrangler` npm package

## Build

```bash
cd /Users/josuehoenicka/Desktop/Workspace/portfolio
npx ng build
```

Output: `dist/portfolio/browser/`

## Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy dist/portfolio/browser --project-name=josuehoenicka-portfolio --branch=main --commit-dirty=true
```

## Full deploy (build + deploy)

```bash
npx ng build && npx wrangler pages deploy dist/portfolio/browser --project-name=josuehoenicka-portfolio --branch=main --commit-dirty=true
```

## First-time setup

1. `npx wrangler login` — Authenticates with Cloudflare via browser (one-time).
2. `npx wrangler pages project create josuehoenicka-portfolio --production-branch=main` — Creates the project (already done).
3. Connect domain in Cloudflare Dashboard → Workers & Pages → josuehoenicka-portfolio → Custom domains → Add `josuehoenicka.com`.

## Notes

- Cloudflare purges CDN cache globally on every deploy. Users always see the latest version.
- No service worker; cache is managed entirely by Cloudflare's edge.
- HTTPS is automatic via Cloudflare.
- The `--commit-dirty=true` flag suppresses warnings about uncommitted git changes.
