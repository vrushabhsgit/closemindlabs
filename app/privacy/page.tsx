import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy — Closemind Labs" };
export default function Privacy() {
  return (
    <main className="legal-page">
      <a href="/">← Closemind Labs</a>
      <h1>Privacy</h1>
      <p>
        This notice describes this website preview. Updated 16 September 2026.
      </p>
      <h2>Working-session scheduling</h2>
      <p>
        Scheduling is not yet connected. This site does not currently collect
        working-session requests or form submissions.
      </p>
      <h2>Analytics and storage</h2>
      <p>
        This application does not include analytics, advertising trackers or
        application cookies. A hosting provider may process technical request
        information, such as an IP address, to serve the site.
      </p>
      <h2>Before launch</h2>
      <p>
        A production privacy notice, the responsible legal entity and a privacy
        contact must be supplied before this site begins collecting personal
        information. This preview does not describe the data handling of a
        deployed enterprise platform.
      </p>
      <a href="/">Return to the website →</a>
    </main>
  );
}
