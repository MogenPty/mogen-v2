import type { MetadataRoute } from "next";
import { sampleArticles } from "@/data/articles";
import { getLocationServiceCombos, locations } from "@/data/locations";
import { portfolioItems } from "@/data/portfolio";
import { services } from "@/data/services";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mogen.co.za";
const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/portfolio",
    "/pricing",
    "/about",
    "/blog",
    "/faq",
    "/contact",
  ];
  return [
    ...staticPages.map((p) => ({
      url: `${BASE}${p}`,
      lastModified: new Date(),
      changeFrequency: (p === "" ? "daily" : "weekly") as
        | "daily"
        | "weekly"
        | "monthly",
      priority: p === "" ? 1.0 : 0.8,
    })),
    {
      url: `${BASE}/locations`,
      lastModified: new Date(),
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    ...locations.map((l) => ({
      url: `${BASE}/locations/${l.slug}`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly" as const,
    })),
    ...getLocationServiceCombos().map(({ location, service }) => ({
      url: `${BASE}/locations/${location}/${service}`,
      lastModified: new Date(),
      priority: 0.85,
      changeFrequency: "weekly" as const,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      priority: 0.9,
      lastModified: new Date(),
    })),
    ...portfolioItems.map((p) => ({
      url: `${BASE}/portfolio/${p.slug}`,
      priority: 0.8,
      lastModified: new Date(),
    })),
    ...sampleArticles.map((s) => ({
      url: `${BASE}/blog/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      lastModified: new Date(s.publishedAt),
    })),
  ];
}
