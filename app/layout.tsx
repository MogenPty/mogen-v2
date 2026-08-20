import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import ScrollToTop from "@/components/shared/scroll-to-top";
import SiteFooter from "@/components/shared/site-footer";
import SiteHeader from "@/components/shared/site-header";
import { jsonLd } from "@/data/json-ld";

import "./globals.css";

const oxaniumSans = Oxanium({
  variable: "--font-oxanium-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mogen.co.za";

export const metadata: Metadata = {
  title: {
    default: "Web Development and Digital Innovation Agency | Mogen Pty Ltd",
    template: "%s | Mogen Pty Ltd",
  },
  description:
    "Full-stack web development, branding & digital marketing for South African businesses. Fast delivery, affordable pricing.",
  authors: [{ name: "Mogen Pty Ltd" }],
  creator: "Mogen Pty Ltd",
  publisher: "Mogen Pty Ltd",
  metadataBase: new URL(siteUrl),
  openGraph: {
    url: siteUrl,
    siteName: "MOGEN",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MogenPty",
    creator: "@MogenPty",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${oxaniumSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <ScrollToTop />
        {/* Header */}
        <SiteHeader />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <SiteFooter />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for the JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Vercel */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
