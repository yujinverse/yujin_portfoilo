# Yujin Kim — Portfolio

Vite + Bun static multi-page site (Home / Experience / Project / Activities).

## Commands

```bash
bun install     # install dependencies
bun run dev     # start dev server (http://localhost:5173)
bun run build   # build to dist/
bun run preview # preview the production build
```

## Structure

```
index.html         Home (hero)
experience.html     Work experience, education, certifications
project.html        Selected projects
activities.html      Awards & volunteer activities
style.css           Shared styles
assets/             Images, icons, app.js (scroll-reveal + nav shadow)
```

## Deploy to Vercel

`vercel.json` is already configured (installCommand: `bun install`, buildCommand: `bun run build`, outputDirectory: `dist`, cleanUrls: true), so no manual settings are needed in the Vercel dashboard.

**Option A — Git integration (recommended)**
1. Push this folder to a GitHub repo.
2. On [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel reads `vercel.json` automatically — just click Deploy.

**Option B — Vercel CLI**
```bash
bun install -g vercel   # or: npm i -g vercel
vercel                  # first run links/creates the project
vercel --prod           # production deploy
```

Internal links use clean URLs (`/experience`, `/project`, `/activities`, no `.html`), matching `cleanUrls: true` in `vercel.json`.
