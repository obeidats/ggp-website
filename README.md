# Global Gulf Pulse (GGP) — Website

Static bilingual (English / Arabic) website built with [Astro](https://astro.build).
English lives at `/en/`, Arabic (right-to-left) at `/ar/`; the root `/` sends visitors
to their saved or browser language. The language button keeps them on the same page.

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies (first time only)         |
| `npm run dev`     | Local development server at http://localhost:4321 |
| `npm run build`   | Build the static site into `dist/`             |
| `npm run preview` | Preview the built site                         |
| `npm run check`   | Type-check everything                          |

## Where to edit things

All text is stored as `{ en: '…', ar: '…' }` pairs, so both languages sit side by side.

| What                                   | File                                   |
| -------------------------------------- | -------------------------------------- |
| Phone, email, address, map, tagline    | `src/config/site.ts`                   |
| Menu, buttons and other interface text | `src/i18n/ui.ts`                       |
| Services (core & support)              | `src/data/services.ts`                 |
| Sectors & the projects summary table   | `src/data/sectors.ts` (totals are calculated automatically) |
| About content: story, vision, mission, values, HSE, roadmap… | `src/data/company.ts` |
| Photos                                 | `src/assets/photos/` + `src/data/photos.ts` |
| Individual projects                    | `src/content/projects/` (see the README there) |
| Colours, fonts, spacing                | `src/styles/global.css` (top of file)  |
| Logos & favicon                        | `public/brand/`, `public/favicon.svg`  |

## Contact form

The form works immediately by opening the visitor's email app, addressed to info@ggp-oman.com.
To have messages sent straight to the inbox instead:

1. Create a free form at https://formspree.io using info@ggp-oman.com.
2. Copy `.env.example` to `.env` and set `PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx`
   (or set the same variable in your hosting provider's settings).
3. Rebuild.

## Photos

The current photos are free-licence placeholders (CC0 / CC BY), credited on `/en/credits/`.
To replace one, save the new image under the same file name in `src/assets/photos/`,
then update or remove its line in `src/data/photo-credits.json`.

## Deploying

`npm run build` produces a plain static folder, `dist/`, that can be hosted anywhere
(Netlify, Vercel, Cloudflare Pages, or any web host). The site address is set in
`astro.config.mjs` (`site: 'https://ggp-oman.com'`).
