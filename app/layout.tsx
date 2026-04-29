import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";

import SiteFooter from "@/components/shared/site-footer";
import SiteHeader from "@/components/shared/site-header";
import ScrollToTop from "@/components/shared/scroll-to-top";
import { BASE_KEYWORDS } from "@/data/seo";

import "./globals.css";

const oxaniumSans = Oxanium({
  variable: "--font-oxanium-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MOGEN | Web Development and Digital Innovation Agency",
    template: "%s | MOGEN",
  },
  description:
    "Full-stack web development, branding & digital marketing for South African businesses. Fast delivery, affordable pricing.",
  keywords: BASE_KEYWORDS,
  authors: [{ name: "MOGEN" }],
  creator: "MOGEN",
  publisher: "MOGEN",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL!,
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
    canonical: process.env.NEXT_PUBLIC_SITE_URL!,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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

        {/* Vercel */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
