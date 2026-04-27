import type { Metadata } from "next";
import { Oxanium } from "next/font/google";

import SiteFooter from "@/components/shared/site-footer";
import SiteHeader from "@/components/shared/site-header";
import ScrollToTop from "@/components/shared/scroll-to-top";
import "./globals.css";

const oxaniumSans = Oxanium({
  variable: "--font-oxanium-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MOGEN | Transform Your Business With World-Class Web Design & AI Solutions",
  description:
    "MOGEN offers professional web design, development, and AI integration services. Based in Botswana, we help businesses build powerful digital presences with stunning websites and smart automation. View our portfolio and get a free consultation today.",
  keywords:
    "web design Botswana, MOGEN, AI solutions, website development, digital agency Gaborone, web developers Botswana, AI integration, ecommerce Botswana, software development",
  authors: [{ name: "MOGEN Team" }],
  creator: "MOGEN",
  publisher: "MOGEN",
  openGraph: {
    title:
      "MOGEN | Transform Your Business With World-Class Web Design & AI Solutions",
    description:
      "MOGEN offers professional web design, development, and AI integration services. Based in Botswana, we help businesses build powerful digital presences.",
    url: "https://www.mogen.co.za",
    siteName: "MOGEN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MOGEN - Professional Web Design & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MOGEN | Transform Your Business With World-Class Web Design & AI Solutions",
    description:
      "MOGEN offers professional web design, development, and AI integration services. Based in Botswana, we help businesses build powerful digital presences.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
