# AI Evaluation Framework Docs

Internal documentation site for the AI Evaluation Framework. Built with Next.js and TypeScript, statically exported for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edits to pages and components hot-reload.

## Build (static export)

```bash
npm run build
```

Output is written to `out/`. Serve locally to verify:

```bash
npx serve out
```

## Deploy to GitHub Pages

### Option A: Deploy from the same repo (e.g. `docs` folder or `gh-pages` branch)

1. **Set the base path** for your GitHub Pages URL. If the site will be at:
   - `https://<org>.github.io/<repo>/` → use base path `/<repo>`
   - `https://<org>.github.io/` (user/org site) → leave base path empty

2. **Build with the base path** (example for repo name `ai-evals-docs`):

   ```bash
   GITHUB_PAGES_BASE=/ai-evals-docs/ npm run build
   ```

3. **Publish the `out/` folder** to GitHub Pages:
   - **GitHub Actions (recommended):** Add a workflow that runs on push to `main`, builds with `GITHUB_PAGES_BASE` set, and uses `peaceiris/actions-gh-pages` (or similar) to push `out/` to the `gh-pages` branch or to the same repo’s `docs` folder, depending on your Pages source.
   - **Manual:** After building with `GITHUB_PAGES_BASE` set, copy the contents of `out/` into the branch/folder that GitHub Pages serves.

### Option B: Example GitHub Actions workflow

A sample workflow is included at the **repo root**: `.github/workflows/deploy-gh-pages.yml`. It expects the Next.js app to live in `docs-site/`. In your repo Settings → Pages → Source, choose **GitHub Actions**. Then:

1. Set `GITHUB_PAGES_BASE` in the workflow to your repo name (e.g. `/my-repo/` for `https://org.github.io/my-repo/`).
2. Push to `main`; the workflow will build and deploy `docs-site/out` to GitHub Pages.

If this repo is **only** the docs site (no parent folder), move the workflow into `docs-site/.github/workflows/` and set `working-directory` to `.` and `publish_dir` to `out`.

```yaml
name: Deploy docs to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: docs-site/package-lock.json
      - run: npm ci
        working-directory: docs-site
      - run: npm run build
        working-directory: docs-site
        env:
          GITHUB_PAGES_BASE: /${{ github.event.repository.name }}/
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs-site/out
```

If this docs site is in a **subfolder** (e.g. `docs-site/`), adjust `working-directory` and `publish_dir` as above. If the repo root is the docs site, use `./out` and set `GITHUB_PAGES_BASE` to `/${{ github.event.repository.name }}/` for project Pages.

### Base path summary

| Site URL | `GITHUB_PAGES_BASE` |
|----------|----------------------|
| `https://org.github.io/ai-eval-framework-docs/` | `/ai-eval-framework-docs/` |
| `https://username.github.io/` (user site) | (omit or empty) |

Build **must** use the same base path as the URL where the site is served, or assets and links will break.

## Project structure

```
docs-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header + DocsLayout)
│   ├── page.tsx            # Home
│   ├── getting-started/
│   │   ├── definition-of-done/
│   │   └── current-projects/
│   ├── architecture/
│   ├── evaluation-pipeline/
│   ├── writing-a-new-eval/
│   ├── metrics/
│   ├── dataset-format/
│   ├── ci-integration/
│   └── debugging/
├── components/             # Reusable UI
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── DocsLayout.tsx
│   ├── Callout.tsx
│   ├── Checklist.tsx
│   └── ProjectCard.tsx
├── lib/
│   └── nav.ts              # Sidebar navigation config
├── next.config.js          # static export + basePath for GitHub Pages
├── package.json
└── README.md
```

## Adding or editing pages

- **New page:** Add a folder under `app/` with `page.tsx` (e.g. `app/my-page/page.tsx` → `/my-page/`).
- **Sidebar:** Edit `lib/nav.ts` to add or reorder links and nested items.
- **Reusable blocks:** Use `Callout`, `Checklist`, and `ProjectCard` from `components/`; add new components there as needed.

## Tech stack

- **Next.js 14** (App Router), **TypeScript**, **static export**
- No backend; all content is static HTML/JS/CSS in `out/` after build.
