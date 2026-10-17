# Patrick Mockridge — a record of work

Single-page, tabbed React site. Static build, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Content

- `src/tabs/` — page content: CV, DarkWow, rchain-rust, Azoth, Research, Contact.
- `src/data/` — links, evidence rows, research posts.
- `src/styles/` — tokens, global styles, window chrome, casework, print.
- `public/` — fonts, favicon, social image, printable CV, 404 page.

## CV PDF

The printable CV is generated from the CV tab with headless Chromium:

```sh
chromium --headless=new --no-sandbox --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf=public/cv.pdf \
  'http://localhost:4173/?tab=cv'
```

Run the production preview first (`npm run build && npm run preview`). Regenerate
the PDF after changing CV content or `src/styles/print.css`. The PDF is committed
and served at `/cv.pdf`.

## Deployment

The source is on `main`. A GitHub Actions workflow example is kept at
`.github/pages-workflow.yml.example`; GitHub requires the `workflow` token
scope before a workflow file can be pushed. To enable Actions, copy the example
to `.github/workflows/pages.yml` after granting that scope, or publish a built
`dist/` to a `gh-pages` branch.

The target repository is `PatrickMockridge.github.io`, so `vite.config.ts` uses
`base: '/'`.

If the site is ever hosted under a project path, change `base` in
`vite.config.ts` to `'/repo-name/'` and update the canonical/OG URLs.

## Editorial notes

- Claims are dated and linked to repositories or artifacts.
- DarkWow is a DarkFi fork; fork-original layers are named explicitly.
- rchain-rust proof scope is stated: Lean 4 laws, conformance-tied entries,
  model-level proofs, and named axioms.
- RChain public record is attributed; no individuals are named and no court
  opinion is linked.
- The site has no analytics, cookies, forms, or third-party requests.
