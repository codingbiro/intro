# birovince.com

Source code for [birovince.com](https://birovince.com) — personal website of Vince Biró.

A plain, documentation-style single page with light & dark mode.
Built with [React 19](https://react.dev), [Vite](https://vite.dev) and TypeScript — no UI framework, no cookies.

Each page view on the live site is reported to a small visit log (`src/visitLog.ts`), the same
Cloudflare Worker that backs travels.birovince.com. It records the IP address, approximate location,
browser, referrer and screen size, and keeps entries for 90 days. Local dev, previews and tests send nothing.

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
public/               Static assets (favicon, manifest, og-image, face.jpg)
  photos/             Cropped, web-sized photos used on the page
src/
  components/         Sidebar, Intro, Outcomes, Background, Focus, Outside, Contact, Footer
  data/               content.ts (all site copy) and profile.ts (links, email)
  theme/              Light/dark theme context (persists choice, follows OS by default)
  hooks/              useActiveSection (highlights the current section in the sidebar)
  visitLog.ts         Reports each page view on the live site to the visit log
  styles.css          Design tokens and layout: system fonts, monochrome, mobile-first
```

## Editing content

All text lives in `src/data/content.ts` — intro, outcomes, background, photo alt text.
Contact details and social links live in `src/data/profile.ts`.
