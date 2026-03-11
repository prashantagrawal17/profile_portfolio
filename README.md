# Portfolio — Ionic 8 / Angular / Capacitor 8

Static portfolio site for **Prashant Kumar Agrawal**, built with Ionic v8, Angular, and Capacitor 8. Content is driven from JSON in `src/assets/data/`.

## Prerequisites

- Node.js 18+
- npm or yarn

## Install

```bash
npm install
```

## Develop

```bash
ionic serve
# or
npx ng serve
```

Open `http://localhost:8100` (or the URL shown). In-app routes use **hash routing** (e.g. `http://localhost:8100/#/home`, `/#/work`, `/#/about`, `/#/contact`) so navigation works without server rewrites.

## Build (static output)

```bash
npm run build
# or
npx ng build
```

Production output is in **`www/`**. Deploy the contents of `www/` to any static host (e.g. Netlify, Vercel, GitHub Pages, Firebase Hosting). For SPA routing, configure the server to serve `index.html` for all routes (e.g. `rewrite * /index.html`).

### GitHub Pages (this repo)

The `www` folder is **not** committed; it is built on GitHub when you push. A workflow (`.github/workflows/deploy-gh-pages.yml`) runs on push to `main`: it runs `npm run build:gh-pages` and deploys the resulting `www/` so the site is live at **https://prashantagrawal17.github.io/profile_portfolio/**.

**One-time:** In repo **Settings → Pages**, set **Source** to **GitHub Actions**. Then sync your code with `.\sync-to-github.ps1` so the workflow is in the repo.

## Capacitor (native apps)

If you add or upgrade to Capacitor 8:

```bash
npm install @capacitor/core@8 @capacitor/cli@8
npx cap init
npx cap add android
# npx cap add ios
```

After each web build, sync and open:

```bash
npx ng build
npx cap sync
npx cap open android
```

Set `webDir` in `capacitor.config.ts` to `www` to match the Angular output path.

## Project structure

- **`src/app/core/`** — Models and `DataService` (loads `assets/data/*.json`).
- **`src/app/home/`** — Home (hero, tagline, featured work, CTA).
- **`src/app/work/`** — Work list and work detail (by slug).
- **`src/app/about/`** — About (bio, skills, experience).
- **`src/app/contact/`** — Contact (heading, email, social links).
- **`src/assets/data/`** — `site.json`, `about.json`, `experience.json`, `projects.json`, `testimonials.json`.
- **`src/assets/images/`** — Add your profile photo as `photo.jpg` (see [sagarshah.dev](https://github.com/shahsagarm/sagarshah.dev)-style Hero and About).

## Data

Edit the JSON files in `src/assets/data/` to change copy, nav, projects, experience, and testimonials. Add your profile image at `src/assets/images/photo.jpg` (or update `about.photo` in `about.json` to match your file name).
