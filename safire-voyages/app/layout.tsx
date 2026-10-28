import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "SAFIRÉ Voyages — Voyages Across Pakistan",
  description:
    "Quiet, carefully planned journeys across Pakistan: Hunza, Skardu, Fairy Meadows, K2, Swat, Naran, Neelum and Chitral.",
};

export const viewport: Viewport = {
  themeColor: "#0F2A5C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
