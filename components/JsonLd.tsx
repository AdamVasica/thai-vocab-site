import type { LanguageApp } from "@/content/apps";
import { SITE } from "@/content/site";

// Structured data so Google understands this page is about an iOS app (and the site behind it).
export function appJsonLd(app: LanguageApp) {
  const pageUrl = new URL(app.path, SITE.url).toString();
  const mobileApp: Record<string, unknown> = {
    "@type": "MobileApplication",
    name: app.storeName,
    alternateName: SITE.name,
    operatingSystem: "iOS",
    applicationCategory: "EducationalApplication",
    description: app.seo.description,
    url: pageUrl,
    image: new URL("/og.jpg", SITE.url).toString(),
    inLanguage: "en",
    author: { "@type": "Person", name: SITE.owner },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start; Dailyvokab Pro unlocks every unit" },
  };
  if (app.appStoreUrl) mobileApp.installUrl = app.appStoreUrl;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: SITE.name, url: SITE.url },
      { "@type": "Organization", name: SITE.name, url: SITE.url, logo: new URL("/apple-touch-icon.png", SITE.url).toString() },
      mobileApp,
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
