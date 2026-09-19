# Production audit — 19 September 2026

## Changes

- Corrected four text-contrast failures in the platform and reuse sections.
- Raised small HTML labels that previously shrank to 5–8px; simplified secondary SVG labels and enlarged primary hero labels on small screens.
- Used the existing collapsible navigation at tablet widths, with Escape dismissal, focus restoration and an explicit control relationship.
- Added screen-reader announcements when the hero waits for approval and completes. Kept pause, reduced-motion and offscreen suspension behavior.
- Replaced inactive booking calls to action with working workflow and approval-example links. Cal.com remains unconnected as requested. Removed the unused dialog and its styles.
- Replaced preview instructions in public copy with factual descriptions of the current website. No invented company identity, contact details, numerical results or certifications were added.
- Separated server route metadata from the interactive homepage. Added route descriptions, canonical configuration, Open Graph metadata and a local 1200×630 social image.
- Added sitemap and robots routes controlled by `SITE_URL`; unconfigured previews remain noindex with an empty sitemap.
- Added reusable production-browser and axe accessibility checks. No new runtime dependency was required; axe is development-only.

## Verification

Production build and TypeScript checks pass. The browser suite covers 1440, 1280, 768, 390 and 360px, keyboard interactions, internal links, legal routes, metadata/assets, hydration and console errors, reduced motion, and the approval-gated animation. Axe checks include WCAG A/AA rules; these automated checks are not a full accessibility certification.

Desktop and mobile section screenshots were visually reviewed for hierarchy, spacing, wrapping, alignment and diagram clarity. The local social image was inspected. Fonts are two locally served WOFF2 files totaling approximately 60 KB; diagrams are SVG/CSS. The hero animation uses bounded timers, stops offscreen and when the tab is hidden, and offers a static reduced-motion version. Other path animations run once or follow scroll, with reduced-motion overrides. All installed runtime dependencies are used. The npm installation audit reported no known vulnerabilities at audit time.

Screenshots are generated under `artifacts/design/` and `artifacts/audit/` (ignored by Git). Run `npm run build` then `npm run test:production` to reproduce the production checks in Chromium. Safari, Firefox, real-device performance and manual assistive-technology testing were not performed.

## Launch inputs still required

- Confirm the public domain and set `SITE_URL` before building the public deployment. The audit does not invent a production domain.
- Confirm the legal entity, contact information and actual hosting data handling before commercial launch. The legal pages describe the present website, not a deployed enterprise platform.
- Supply Cal.com configuration when scheduling is ready. Current calls to action intentionally navigate within the site.
- Product capabilities describe the supplied company thesis; this website audit cannot independently certify integrations or enterprise deployments.
