import type { Metadata } from "next";
import { siteUrl } from "../site-config";
export const metadata: Metadata = {
  title: "Privacy — Closemind Labs",
  description:
    "How the Closemind Labs website handles requests, analytics and data.",
  alternates: {
    canonical: siteUrl ? new URL("/privacy", siteUrl).href : undefined,
  },
  openGraph: {
    title: "Privacy — Closemind Labs",
    description:
      "How the Closemind Labs website handles requests, analytics and data.",
    url: siteUrl ? new URL("/privacy", siteUrl).href : undefined,
  },
};
export default function Privacy() {
  return (
    <main className="legal-page">
      <a href="/">← Closemind Labs</a>
      <h1>Privacy</h1>
      <p>This notice describes this website. Updated 17 September 2026.</p>
      <h2>Working-session scheduling</h2>
      <p>
        This site does not collect working-session requests or form submissions.
      </p>
      <h2>Analytics and storage</h2>
      <p>
        This application does not include analytics, advertising trackers or
        application cookies. A hosting provider may process technical request
        information, such as an IP address, to serve the site.
      </p>
      <h2>Enterprise deployments</h2>
      <p>
        Data handling for a deployed enterprise platform is defined separately
        in the customer agreement. This notice covers only the public website.
      </p>
      <a href="/">Return to the website →</a>
    </main>
  );
}
