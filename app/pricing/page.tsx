import type { Metadata } from "next";

import PricingAddOns from "@/components/pricing/add-ons";
import PricingHeader from "@/components/pricing/header";
import PaymentOptions from "@/components/pricing/payment-options";
import PricingList from "@/components/pricing/pricing-list";
import { BASE_KEYWORDS } from "@/data/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, no-surprise web development pricing for South African businesses. Websites from R2,999. Starter, Professional and Premium packages with flexible payment options.",
  keywords: [
    "website pricing south africa",
    "affordable web design packages",
    "web development cost south africa",
    "website packages pretoria",
    "cheap website design",
    "R2999 website",
    "web design payment plans",
    "website quotes south africa",
    ...BASE_KEYWORDS,
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    url: "/pricing",
    type: "website",
  },
};

export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PricingHeader />

        {/* Pricing Cards */}
        <PricingList />

        {/* Add-ons */}
        <PricingAddOns />

        {/* FAQ Pricing */}
        <PaymentOptions />
      </div>
    </div>
  );
}
