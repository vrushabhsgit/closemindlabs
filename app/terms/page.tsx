import type { Metadata } from "next";
import { siteUrl } from "../site-config";
export const metadata: Metadata = {
  title: "Website terms — Closemind Labs",
  description:
    "Terms for the Closemind Labs website, illustrative workflows and third-party references.",
  alternates: {
    canonical: siteUrl ? new URL("/terms", siteUrl).href : undefined,
  },
  openGraph: {
    title: "Website terms — Closemind Labs",
    description:
      "Terms for the Closemind Labs website, illustrative workflows and third-party references.",
    url: siteUrl ? new URL("/terms", siteUrl).href : undefined,
  },
};
export default function Terms() {
  return (
    <main className="legal-page">
      <a href="/">← Closemind Labs</a>
      <h1>Website terms</h1>
      <p>
        This site presents the Closemind Labs platform and illustrative
        workflows. Updated 17 September 2026.
      </p>
      <h2>Illustrative content</h2>
      <p>
        Workflow examples are simulations. They do not connect to enterprise
        systems, modify business records or demonstrate a customer deployment.
        Product capabilities and deployment requirements are subject to
        technical scoping.
      </p>
      <h2>Commercial terms</h2>
      <p>
        Commercial commitments, support levels and deployment terms require a
        separate written agreement.
      </p>
      <h2>Third-party names</h2>
      <p>
        Product and company names identify the types of systems the platform is
        intended to work with. They do not imply partnership, endorsement or
        certification.
      </p>
      <a href="/">Return to the website →</a>
    </main>
  );
}
