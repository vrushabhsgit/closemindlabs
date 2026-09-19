# closemindlabs

An original enterprise AI website built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion. Diagrams are native SVG/CSS. Geist and Geist Mono are bundled locally through `next/font/local`, with the SIL font license in `public/fonts/OFL.txt`. No external image or font service is required.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production: `npm run build && npm start`.

## Verify

```sh
npm run typecheck
npm test
npm run build
npm run test:production
```

Browser tests use Google Chrome at `/usr/bin/google-chrome` by default. Set `CHROME_PATH` to another installed Chromium executable. `npm test` uses the development server on port 3000. `npm run test:production` starts an isolated production server on port 3100 and requires a completed build. The production suite includes axe accessibility checks at 1440, 1280, 768, 390 and 360px, plus link, metadata, keyboard, animation and rendering checks.

## Interactions

- Keyboard-accessible platform tabs, including arrow, Home and End keys.
- Six workflow categories with illustrative system flows.
- Approval-gated workflow simulation and replay.
- Responsive mobile navigation with Escape and focus restoration.
- Working on-page calls to action; Cal.com remains unconnected.
- Reduced-motion support and local privacy/terms pages.

## Launch configuration still needed

The supplied brief did not include a booking service, contact address, legal entity or production domain. Scheduling remains unconnected, as requested; calls to action lead to workflows and the approval example. Add Cal.com when ready. The legal pages describe the current website only; company identity, contact and hosting-specific notices still need confirmation before commercial launch. Confirm deployment and integration capabilities against the actual product. Third-party system names do not imply partnerships.

Set `SITE_URL` to the confirmed public origin (for example through your hosting environment) **before building**. Canonicals and the sitemap use that origin. Without it, preview builds are deliberately noindex, robots disallows crawling and the sitemap is empty. The generated 1200×630 Open Graph image is local and requires no external service. See `.env.example`.

## Visual system

The recurring motif is a set of thin blue routes: fragmented sources converge into one governed layer. Blue marks connections, selected capabilities and deliberate actions. Architecture and workflow diagrams change with the selected content; deployment diagrams mark ownership boundaries. A scroll-linked bridge connects the problem statement to the platform. Reduced-motion mode preserves the complete diagrams without animation.

Route metadata is server-rendered in `app/page.tsx`; interactive homepage content lives in `app/components/home-page.tsx`. Shared SVG components live in `app/components/diagrams.tsx`. The responsive type scale and section layouts live in `app/globals.css`. Browser tests capture every section at desktop and mobile sizes into the ignored `artifacts/design/` directory.

## Hero workflow demonstration

`app/components/hero-diagram.tsx` shows all six system inputs and the five platform capabilities. It advances into shared context, then waits for explicit approval of an illustrative invoice adjustment. Approval enables model routing, governed execution, evaluation, and a verified return to the existing systems. Pause/resume and replay controls are included. Timers and moving route markers stop offscreen and when the browser tab is hidden. Reduced-motion mode presents the full architecture as a static diagram; no real business systems are connected.

The stage sequence and approval boundary are covered by `tests/hero-diagram.spec.ts`.

## Production audit

See [the audit report](docs/production-audit.md) for fixes, verification coverage and the remaining launch configuration.
