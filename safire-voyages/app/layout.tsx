import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { CurrencyProvider } from "@/components/Currency";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  metadataBase: new URL("https://safire.pk"),
  title: { default: "SAFIRÉ Voyages — Voyages Across Pakistan", template: "%s · SAFIRÉ Voyages" },
  description:
    "Quiet, carefully planned journeys across Pakistan: Hunza, Skardu, Fairy Meadows, K2, Swat, Naran, Neelum and Chitral.",
};

export const viewport: Viewport = {
  themeColor: "#0F2A5C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body>
        <CurrencyProvider>
          {children}
          <WhatsAppButton />
        </CurrencyProvider>
      </body>
    </html>
  );
}
