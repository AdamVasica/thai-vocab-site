import type { Metadata } from "next";
import { thai } from "@/content/apps";
import { SITE } from "@/content/site";
import { Landing } from "@/components/Landing";
import { THAI_ART } from "@/components/art/ThaiArt";
import { JsonLd, appJsonLd } from "@/components/JsonLd";

// The Thai app is the home page. Future apps get their own path (e.g. /spanish) and the picker links them.
const app = thai;

export const metadata: Metadata = {
  title: app.seo.title,
  description: app.seo.description,
  keywords: app.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: "Every word you learn is one more thing you can say | Dailyvokab",
    description: app.seo.description,
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Dailyvokab: learn the Thai words you’ll use every day" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Thai words with audio and tones | Dailyvokab",
    description: app.seo.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <>
      <JsonLd data={appJsonLd(app)} />
      <Landing app={app} art={THAI_ART} />
    </>
  );
}
