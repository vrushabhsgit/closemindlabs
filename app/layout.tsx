import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
