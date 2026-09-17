import type { Metadata } from "next";
import "./globals.css";
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
  title: "Closemind Labs — Your enterprise. Your infrastructure. Your AI.",
  description:
    "A private AI operating layer that connects your models, data and business systems so governed agents can complete real work. Built for infrastructure you control.",
  openGraph: {
    title: "Closemind Labs — The private AI operating layer",
    description: "Make the systems you already own AI-operable.",
    type: "website",
  },
  robots: { index: true, follow: true },
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
