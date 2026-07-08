# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Create React App personal portfolio (single-page site) deployed to GitHub Pages at `https://ibnuladib.github.io/` (the repo name makes this a user page; the deployed artifact is the static `build/` directory produced by `react-scripts build` and published via the `gh-pages` package). No custom domain is in use — there is no `CNAME` file.

There is no backend, no router, no state library. State is a single `useState` in `App.js` controlling a three-tab view (Projects / Experience / Research).

## Commands

All commands run from repo root.

- `npm start` — dev server (webpack-dev-server via react-scripts) on `http://localhost:3000`.
- `npm run build` — production build → `build/`. This is what gets deployed.
- `npm test` — Jest via react-scripts (watch mode by default; `CI=true npm test` for one-shot).
  - To run a specific test: `npm test -- --testNamePattern="your test pattern"`
  - To run tests in watch mode focused on a specific file: `npm test -- src/__tests__/example.test.js`
- `npm run deploy` — runs `predeploy` (`npm run build`) then publishes `build/` to the `gh-pages` branch via the `gh-pages` package. Requires push access to the repo.
- `npx svgo` — listed as a dependency; used for optimizing SVG assets (`src/logo.svg`).
- Linting: ESLint is configured via `eslintConfig` in `package.json`. Run with `npx eslint src` (or add a lint script to `package.json` if desired).

## Architecture

Single-page React app, bootstrapped with Create React App (CRA), no routing library.

- `src/index.js` — mounts `<App />` into `#root` (in `public/index.html`), wraps in `React.StrictMode`, calls `reportWebVitals()`.
- `src/App.js` — top-level layout. Holds the `activeTab` state and renders the hero/profile card, the three tab buttons, and the active tab's content section. **Projects are dynamically rendered** by mapping over `projectData` and sorted by date (most recent first) (Research tab similarly maps over `researchData.papers`).
- `src/components/Project.jsx` — single project card (title, date, tags, description, optional GitHub icon link).
- `src/components/Research.jsx` — single paper card (title, venue, date, tags, description, optional methodology + achievements list, PDF / ACL Anthology links).
- `src/components/button.jsx` — small button that opens a hardcoded GitHub/LinkedIn URL in a new tab. **Currently unused** — the JSX invocation is commented out in `App.js`; the social links are rendered as raw `<a>` + `<FontAwesomeIcon>` instead.
- `src/components/Project.css` — legacy plain-CSS card styles. Not imported anywhere in the current code; the live card styling is the Tailwind class list on `Project.jsx`'s root `<div>`. Safe to delete if cleaning up.
- `src/data/projectData.js` — exports `projectData` with keys `project1` … `project23`. **To add a project, add a new key here** — it will automatically appear in the Projects tab via `.map()` (sorted by date, newest first).
- `src/data/researchData.js` — exports `researchData.papers` (an array). Research tab uses `.map()`, so new papers just need to be appended to the array.
- `src/index.css` — Tailwind directives (`@tailwind base/components/utilities`) + body background (`#1a1a1a`), a `.post` class (unused), and `.social-icon` rules (overridden by Tailwind utility classes on actual social links).

## Styling

Tailwind via PostCSS (not the old CDN script). `tailwind.config.js` content glob covers `src/**/*.{js,jsx,ts,tsx}`. `postcss.config.js` runs `tailwindcss` + `autoprefixer`. New Tailwind classes only generate CSS if the file containing them matches the content glob.

`public/index.html` does **not** load any external CSS — Tailwind is built locally via PostCSS (`@tailwind base/components/utilities` in `src/index.css`), and icons come from the `@fortawesome/*` npm packages.

The Tailwind theme is extended in `tailwind.config.js` with custom colors (`ink`, `paper`, `graphite`, `chalk`, `accent`, `fault`), font families (`display`, `sans`, `mono`), border radii, and font sizes.

## Deployment

- `homepage` in `package.json` is `https://ibnuladib.github.io/`. **Note:** CRA's `homepage` field only sets the *pathname* prefix for built asset URLs (it strips the hostname via `new URL(homepage, 'https://create-react-app.dev').pathname`). For this site the result is just `/`, so built asset URLs are root-relative (`/static/...`) — fine for a GitHub Pages project page. The homepage would only matter for hosting under a subpath (e.g. `https://example.com/portfolio/` → `homepage: "https://example.com/portfolio"`).
- No `CNAME` file exists. If a custom domain is ever re-added, both the root `CNAME` and `public/CNAME` need to be created and kept in sync (only `public/CNAME` is copied into `build/`).
- Deploy flow: `npm run deploy` → builds → pushes `build/` to the `gh-pages` branch on `origin`. GitHub Pages publishes from whichever branch the repo's Pages settings point to — verify that's `gh-pages` if deploys appear not to land.

## Tests

There are currently **no tests** (the CRA boilerplate `src/App.test.js` was removed — it asserted page text that doesn't exist in `App.js` and was failing on every run). **`npm test` exits with code 1** when no tests are found — that's react-scripts' default behavior, not a bug. To get a green exit with zero tests, run `CI=true npm test -- --passWithNoTests`, or add a placeholder test (e.g. `src/App.test.js` with a single `it('renders', () => {})`). CI is not configured (no `.github/workflows/`).

## Notes for future agents

- The portfolio data is in `src/data/`. The Projects tab uses `.map()` over `projectData` and sorts by date (most recent first) — adding a new project only requires adding a new entry in `projectData.js`.
- The README (`README.md`) is a single line: `# personalwebsite`. Treat it as having no documentation value; this file supersedes it.
- `.claude/settings.json` exists and enables the `skill-creator` plugin. Other agents may write to `.claude/skills/` for project-specific skills (it's gitignored).
- **Development tips:**
  - To lint the source code, run `npx eslint src` (ESLint configuration is in `package.json.eslintConfig`).
  - To run a specific test, use `npm test -- --testNamePattern="your test pattern"`.
  - To modify Tailwind's theme or content paths, edit `tailwind.config.js` and/or `postcss.config.js`.
  - To add new FontAwesome icons, import them in the component where they are needed (see `src/App.js` for examples) and add them to the `@fortawesome/free-brands-svg-icons` or `@fortawesome/free-solid-svg-icons` imports as appropriate.