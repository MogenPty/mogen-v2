import PortfolioHeader from "@/components/portfolio/header";
import PortfolioGrid from "@/components/portfolio/portfolio-grid";
import ServiceCTA from "@/components/service/cta-section";
import { BASE_KEYWORDS } from "@/data/seo";

export const metadata = {
  title: "Our Portfolio",
  description:
    "Browse MOGEN's portfolio of web development projects — local businesses, NGOs, startups, healthcare, and fintech across South Africa.",
  keywords: [
    "web design portfolio",
    "website examples south africa",
    "web development case studies",
    "local business websites pretoria",
    "NGO website design",
    "startup web development",
    "affordable website examples",
    ...BASE_KEYWORDS,
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PortfolioHeader />

        <PortfolioGrid />
      </div>

      <ServiceCTA />
    </div>
  );
}
