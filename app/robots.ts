import type { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mogen.co.za';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/showcase/', '/api/'] },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
