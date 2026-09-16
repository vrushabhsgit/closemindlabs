# closemindlabs

An original enterprise AI website built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion. Diagrams are native SVG/CSS; no external image or font service is required.

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
```

Browser tests use Google Chrome at `/usr/bin/google-chrome` by default. Set `CHROME_PATH` to another installed Chromium executable. Tests run against the development server on port 3000, starting it if needed.

## Interactions

- Keyboard-accessible platform tabs, including arrow, Home and End keys.
- Six workflow categories with illustrative system flows.
- Approval-gated workflow simulation and replay.
- Responsive mobile navigation and native accessible session dialog.
- Scheduling placeholder, ready for a future Cal.com integration.
- Reduced-motion support and local privacy/terms pages.

## Launch configuration still needed

The supplied brief did not include a booking service, contact address, legal entity or production domain. Scheduling is intentionally unconnected, as requested. Integrate Cal.com before enabling booking, and replace the preview legal notices with reviewed company policies. Confirm deployment and integration claims against the actual product. Third-party system names do not imply partnerships.

Set canonical URLs, sitemap, social sharing image and hosting-specific privacy details once the production domain is known.
