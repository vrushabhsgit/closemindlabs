import type { Metadata } from "next";
import HomePage from "./components/home-page";
import { siteUrl, siteDescription } from "./site-config";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl?.href },
  openGraph: {
    title: "Closemind Labs — The private AI operating layer",
    description: siteDescription,
    type: "website",
    siteName: "Closemind Labs",
    locale: "en_US",
    url: siteUrl?.href,
  },
};

export default function Page() {
  return <HomePage />;
}
