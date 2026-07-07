# ClassScout NYC — Design System website

The public, browsable **ClassScout NYC Design System** — everything designers,
developers, and decision makers need to build ClassScout: principles, the
**Bluestone** color/type/spacing tokens, the trust system, and every UI
component rendered live from its real source. Plus the responsive
Home → Results → Detail click-through.

The site is **generated from the design-system source** and published to
**GitHub Pages** by CI, so it never drifts from the components it documents.

- **Docs page** — [`project/design-system.html`](project/design-system.html) → served as the site root `index.html`
- **UI kit** — [`project/ui_kits/classscout-web/index.html`](project/ui_kits/classscout-web/index.html) → `/ui_kits/classscout-web/`
- Original design-tool handoff notes: [`HANDOFF.md`](HANDOFF.md)
- Refresh the design source from Claude Design (run locally): [`docs/SYNC-LOCALLY.md`](docs/SYNC-LOCALLY.md)

---

## How it works

`project/` holds the design system source exactly as exported from Claude Design:

| Source | What it is |
|---|---|
| `project/tokens/`, `project/styles.css` | Design tokens (Bluestone palette, type, spacing, shape) — the single source of truth |
| `project/components/**/*.jsx` | The 27 React components, token-driven, inline-styled |
| `project/design-system.html` | The documentation page (principles, tokens, live demos, usage rules) |
| `project/ui_kits/classscout-web/` | The responsive click-through screens |
| `project/guidelines/`, `project/assets/`, `project/fonts/` | Guideline cards, brand assets, self-hosted Inter |

`npm run build` (see [`scripts/build.mjs`](scripts/build.mjs)) assembles `dist/`:

1. Copies the `project/` source into `dist/`.
2. **Regenerates the component demo bundle** (`assets/ds-static-bundle.js`) from
   `components/**/*.jsx` — so the docs demos always match the component source.
3. **Regenerates the UI-kit bundle** (`_ds_bundle.js`) from the kit screens, so
   the click-through loads instantly without in-browser transpilation.
4. Writes `index.html` (the docs page) and `.nojekyll`.

React, ReactDOM, and Babel are **vendored** in `project/assets/vendor/` — the
site pulls nothing from a CDN at runtime, so it works offline and can't break
when an external package changes.

Because the tokens, CSS, HTML, and components are served from source (only the
two `.jsx` bundles are generated), **editing the design system updates the
website** on the next deploy. Change a token → push → the live site rebuilds.

## Local development

```bash
npm install      # installs the three Babel build deps
npm run build    # writes dist/
npm run serve    # serves dist/ at http://localhost:8080
```

## Deploying to GitHub Pages

Deployment is automated by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
every push to `main` rebuilds `dist/` and publishes it.

**One-time setup** after pushing this repo to GitHub:

1. Push to a GitHub repository (e.g. `main` branch).
2. In the repo, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. The first push (or **Actions → Deploy design system to GitHub Pages
→ Run workflow**) publishes the site to
`https://<user>.github.io/<repo>/`.

> The workflow builds from source on every push, so the published site always
> reflects the current design system — no committed build artifacts, no manual
> re-export.
