# AGMP Docs

Documentation site for the **African Genomic Medicine Portal (AGMP)**.

Built with [VitePress](https://vitepress.dev/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation
```bash
git clone https://github.com/afrigen-d/agmp-docs.git
cd agmp-docs
npm install
```

### Local Development
```bash
npm run docs:dev
```

Your local site will be at `http://localhost:4173/agmp-docs/` — make sure to include `/agmp-docs/` in the URL when testing locally.

### Build
```bash
npm run docs:build
```

### Preview Production Build
```bash
npm run docs:preview
```

## Deployment

The site is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

**Live site:** [https://afrigen-d.github.io/agmp-docs/](https://afrigen-d.github.io/agmp-docs/)