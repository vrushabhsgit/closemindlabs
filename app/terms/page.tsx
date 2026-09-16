import type { Metadata } from "next";
export const metadata: Metadata = { title: "Website terms — Closemind Labs" };
export default function Terms() {
  return (
    <main className="legal-page">
      <a href="/">← Closemind Labs</a>
      <h1>Website terms</h1>
      <p>
        This site is a product presentation and interactive preview. Updated 16
        September 2026.
      </p>
      <h2>Illustrative content</h2>
      <p>
        Workflow examples are simulations. They do not connect to enterprise
        systems, modify business records or demonstrate a customer deployment.
        Product capabilities and deployment requirements are subject to
        technical scoping.
      </p>
      <h2>No booking or service agreement</h2>
      <p>
        The working-session button does not currently make a booking or create a
        service agreement. Commercial commitments, support levels and deployment
        terms require a separate written agreement.
      </p>
      <h2>Third-party names</h2>
      <p>
        Product and company names identify the types of systems the platform is
        intended to work with. They do not imply partnership, endorsement or
        certification.
      </p>
      <h2>Before launch</h2>
      <p>
        The responsible legal entity, contact details and approved production
        terms must be added before commercial launch.
      </p>
      <a href="/">Return to the website →</a>
    </main>
  );
}
