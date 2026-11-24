import type { MetadataRoute } from "next";
import { APPS } from "@/content/apps";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...APPS.map((a) => ({ url: new URL(a.path, SITE.url).toString(), lastModified: now, changeFrequency: "monthly" as const, priority: 1 })),
    { url: `${SITE.url}/support.html`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/privacy.html`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
