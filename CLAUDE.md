# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing site for Petra Sailer (petrasailer.com), a German-language coaching
site. Built on [vinext](https://github.com/cloudflare/vinext) (Next.js App
Router running on Cloudflare Workers via Vite), with optional Cloudflare D1 +
Drizzle support that is currently unused (`db/schema.ts` is intentionally
empty).

## Commands

```bash
npm install
npm run dev          # start local dev server (vinext dev)
npm run build         # build for Cloudflare Workers (vinext build)
npm start              # run the built worker (vinext start)
npm test               # npm run build && node --test tests/rendered-html.test.mjs
npm run lint            # eslint . --ignore-pattern dist --ignore-pattern .next
npm run db:generate      # drizzle-kit generate (only relevant once db/schema.ts has tables)
```

Run a single test file directly with `node --test tests/rendered-html.test.mjs`
(requires `npm run build` to have produced `dist/server/index.js` first, since
the test imports the built worker rather than source).

Node `>=22.13.0` is required.

## Architecture

- **Routing**: standard Next.js App Router pages under `app/`. Each route
  (`/`, `/ueber-mich`, `/klarheitssitzung`, `/dem-eigenen-folgen`, `/kontakt`)
  is a self-contained `page.tsx` + `page.module.css` pair; there is no shared
  layout component for the nav/footer, so `NAVIGATION_ITEMS` and page chrome
  are duplicated per page rather than imported from one place.
- **Worker entry** (`worker/index.ts`): Cloudflare Worker `fetch` handler.
  Intercepts `/_vinext/image` for on-the-fly image optimization (via
  `env.IMAGES`), otherwise delegates to vinext's `app-router-entry` handler.
- **Vite/Cloudflare bindings** (`vite.config.ts`): reads `.openai/hosting.json`
  for declared `d1`/`r2` binding names and simulates them locally via the
  `@cloudflare/vite-plugin`. `.openai/hosting.json` is the source of truth for
  which Cloudflare bindings the site has; currently both `d1` and `r2` are
  `null` (not provisioned).
- **Database** (`db/`): `db/index.ts` exposes `getDb()` (Drizzle over D1),
  which throws if the `DB` binding isn't set — expected until a `d1` binding
  name is added to `.openai/hosting.json`. `db/schema.ts` is empty by design;
  see `examples/d1/db/schema.ts` and `examples/d1/app/api/notes/route.ts` for
  the opt-in pattern to follow if a database becomes needed.
- **Build packaging** (`build/sites-vite-plugin.ts`): a Vite plugin
  (`closeBundle` hook) that copies `.openai/hosting.json` and any
  `drizzle/` migrations into `dist/.openai/` after build.
- **Contact form** (`app/kontakt/ContactForm.tsx`): client-side validated but
  has no server-side send integration yet — submission opens a pre-filled
  `mailto:` link rather than actually sending anything. See
  `app/kontakt/FORMULARANBINDUNG.md` (German) for what's required to wire up
  real delivery (server endpoint, email service, spam protection). Don't
  present the form as if it sends automatically without also updating that
  doc and the in-page delivery note.
- **ChatGPT sign-in** (`app/chatgpt-auth.ts`): optional helpers
  (`getChatGPTUser`, `requireChatGPTUser`, `chatGPTSignInPath`,
  `chatGPTSignOutPath`) for Dispatch-owned Sign-in-with-ChatGPT (SIWC). Not
  currently used by any page. Dispatch owns `/signin-with-chatgpt`,
  `/signout-with-chatgpt`, `/callback`, and identity header injection — never
  add app routes at those paths. Pages using these helpers need
  `export const dynamic = "force-dynamic"` since they read per-request
  identity headers (`oai-authenticated-user-email`,
  `oai-authenticated-user-full-name`). SIWC proves identity, not workspace
  membership — add explicit server-side checks for anything workspace-gated.
- **Tests** (`tests/rendered-html.test.mjs`): currently asserts against the
  vinext starter's default "site is taking shape" loading skeleton
  (`app/_sites-preview/`), which no longer reflects this repo's actual pages
  — that preview directory doesn't exist here. Treat this test as stale
  scaffolding from the starter template rather than a check of the real site
  content; it will need rewriting to test the actual pages before it's a
  meaningful signal.

## Content notes

- All user-facing copy is German.
- Styling is CSS Modules (`page.module.css` per route) plus global styles and
  CSS custom properties (color/type/spacing tokens) in `app/globals.css`,
  which imports Tailwind (`@import "tailwindcss"`) but pages are hand-styled
  with custom classes/vars rather than Tailwind utility classes.
