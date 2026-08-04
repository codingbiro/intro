# birovince.com

Source code for [birovince.com](https://birovince.com) — personal website of Vince Biró.

A fast single-page site with light & dark mode.
Built with [React 19](https://react.dev), [Vite](https://vite.dev) and TypeScript — no UI framework, no tracking.

## Scripts

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the dev server (also `npm start`)           |
| `npm run build`   | Type-check and build for production into `build/` |
| `npm run preview` | Serve the production build locally                |
| `npm test`        | Run the test suite (Vitest + Testing Library)     |
| `npm run lint`    | Lint with ESLint                                  |
| `npm run tsc`     | Type-check only                                   |

## Structure

```
index.html            Entry HTML: meta/OG tags, JSON-LD, theme bootstrap
public/               Static assets (portrait, favicon, manifest)
src/
  components/         Header, Hero, About, Skills, Contact, Footer
  data/               content.ts (all site copy) and profile.ts (links, email)
  theme/              Light/dark theme context (persists choice, follows OS by default)
  hooks/              useTypewriter, useReveal, usePrefersReducedMotion
  styles.css          Design system: CSS custom properties, mobile-first layout
```

## Editing content

All text lives in `src/data/content.ts` — hero copy, about paragraphs, skills.
Contact details and social links live in `src/data/profile.ts`.
