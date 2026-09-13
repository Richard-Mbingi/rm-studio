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

Adding a project is "write one file" — no layout code to touch. Checklist:

1. Create `src/content/work/<slug>.md`, where `<slug>` becomes the URL
   (`/work/<slug>`).
2. Fill in frontmatter (schema enforced in `src/content.config.ts`):
   - `title` *(required)* — string
   - `date` *(required)* — `YYYY-MM-DD`
   - `summary` — one or two sentence teaser shown on the case-study page,
     distinct from the full `## Problem` write-up
   - `client` — string
   - `role` — string
   - `timeline` — string
   - `tools` — array, e.g. `["Figma"]`
   - `tags` — array, e.g. `["Fintech", "Dashboard"]`
   - `featured` — boolean, defaults to `false`
   - `cover` — string path to a cover image; optional field exists in the
     schema, but image handling/optimization isn't wired up yet (see the
     mockup-image-handling task) — leave it out until that's decided.
3. Write the body as four sections, in this order, matching every
   existing entry:
   - `## Problem`
   - `## Philosophy`
   - `## Solution`
   - `## Mockups`
4. Run `npm run dev` and check `/work/<slug>` renders, and that the new
   entry shows up wherever the project grid lists work.

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
