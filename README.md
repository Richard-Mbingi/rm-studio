# Portfolio scaffold

Astro site, markdown-driven case studies, native view transitions between
the work list and each case study. No server, no database — `astro build`
produces a plain static `dist/` folder.

## Local development

```bash
npm install
npm run dev
```

## Adding a new case study

Add a markdown file to `src/content/work/`, following the shape of the
existing entries — frontmatter (`title`, `client`, `role`, `timeline`,
`tools`, `tags`, `featured`, `date`) plus `## Problem`, `## Philosophy`,
`## Solution`, `## Mockups` sections in the body. That's the whole
workflow — no layout code to touch.

## Deploying to Hostinger

This repo ships with `.github/workflows/deploy.yml`, which builds the
site and pushes `dist/` to your Hostinger `public_html/` over FTP on
every push to `main`. To wire it up:

1. In Hostinger's hPanel, find your FTP credentials under
   **Files → FTP Accounts** (or create a dedicated FTP account for
   deploys rather than using your main account).
2. In your GitHub repo, go to **Settings → Secrets and variables →
   Actions**, and add three repository secrets:
   - `FTP_SERVER` — your Hostinger FTP hostname
   - `FTP_USERNAME` — the FTP account username
   - `FTP_PASSWORD` — the FTP account password
3. Push to `main`. The action builds and deploys automatically —
   check the **Actions** tab in GitHub to watch it run.

No Node.js hosting tier needed on Hostinger's side — this deploys to
plain static file hosting, which is available on any Hostinger web
hosting plan.

## Updating the domain

`astro.config.mjs` has a placeholder `site` value — update it once
the domain is pointed at this deployment.
