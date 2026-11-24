# dailyvokab.com

Marketing site for Dailyvokab (Thai Flashcards: Dailyvokab, iPhone). Next.js static export → GitHub Pages.

- `npm run dev`: local dev server
- `npm run build`: writes the static site to `out/`
- Copy lives in `content/apps.ts` (one entry per language app). Feature graphics per app in `components/art/`.
- Adding a language: add an entry to `APPS`, a page at its `path` (e.g. `app/spanish/page.tsx`) and its art file. The header language picker appears automatically once there are 2+ apps.
- `public/privacy.html` and `public/support.html` are linked from the App Store listing. Keep these paths.
- When the app is live: set `appStoreUrl` in `content/apps.ts` and the buttons switch from "Coming soon" to a real link.
