# PryvX Documentation

Documentation site for **PryvX**, a Privacy-Enhancing Technology (PET) data collaboration platform. Covers platform overview, features, industry use cases, a step-by-step how-to guide, and API reference.

Built with [VitePress](https://vitepress.dev), matching the layout, navigation, sidebar, local search, and dark/light theming of a standard VitePress documentation site.

## Development

```bash
npm install
npm run docs:dev
```

Then open http://localhost:5173.

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yml`. Enable **Settings → Pages → Source: GitHub Actions** on the repository once it's pushed.
