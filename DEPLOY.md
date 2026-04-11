# Deploy

Portfolio hosted on **Cloudflare Pages** at [josuehoenicka.com](https://josuehoenicka.com).

## Build & Deploy

**Windows (PowerShell):**
```powershell
cd C:\Users\josue\Projects\josuehoenicka
npx ng build; npx wrangler pages deploy dist/portfolio/browser --project-name=josuehoenicka-portfolio --branch=main --commit-dirty=true
```

**macOS / Linux (Bash):**
```bash
cd ~/Projects/josuehoenicka
npx ng build && npx wrangler pages deploy dist/portfolio/browser --project-name=josuehoenicka-portfolio --branch=main --commit-dirty=true
```

## First-time setup

1. `npx wrangler login` — Authenticates with Cloudflare via browser (one-time).
2. `npx wrangler pages project create josuehoenicka-portfolio --production-branch=main` — Creates the project (already done).
3. Connect domain in Cloudflare Dashboard → Workers & Pages → josuehoenicka-portfolio → Custom domains → Add `josuehoenicka.com`.
