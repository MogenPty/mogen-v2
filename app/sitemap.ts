import type { MetadataRoute } from "next";
import { sampleArticles } from "@/data/articles";
import { portfolioItems } from "@/data/portfolio";
import { services } from "@/data/services";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mogen.co.za";

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
      changeFrequency: (p === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: p === "" ? 1.0 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      priority: 0.9,
      lastModified: new Date(),
    })),
    ...portfolioItems.map((p) => ({
      url: `${BASE}/portfolio/${p.slug}`,
      priority: 0.6,
      lastModified: new Date(),
    })),
    ...sampleArticles.map((s) => ({
      url: `${BASE}/blog/${s.slug}`,
      priority: 0.5,
      lastModified: new Date(s.publishedAt),
    })),
  ];
}
