import type { Metadata } from "next";
import "./globals.css";
import { siteUrl, siteDescription } from "./site-config";
import localFont from "next/font/local";

const geist = localFont({
  src: "../public/fonts/geist-latin.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "100 900",
});
export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  title: "Closemind Labs — The private AI operating layer for the enterprise",
  description: siteDescription,
  openGraph: {
    title: "Closemind Labs — The private AI operating layer",
    description:
      "Complete workflows across existing systems with customer control, defined permissions and verified results.",
    type: "website",
    siteName: "Closemind Labs",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: Boolean(siteUrl), follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
