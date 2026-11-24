import type { Metadata, Viewport } from "next";
import { Manrope, Anuphan } from "next/font/google";
import { SITE } from "@/content/site";
import "./globals.css";

// Fonts are downloaded at build time and served from dailyvokab.com (no Google request from visitors).
const manrope = Manrope({ subsets: ["latin", "latin-ext"], weight: ["500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const anuphan = Anuphan({ subsets: ["thai", "latin"], weight: ["500", "600", "700"], variable: "--font-anuphan", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.owner }],
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbe9da",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${anuphan.variable}`}>
      <body>{children}</body>
    </html>
  );
}
