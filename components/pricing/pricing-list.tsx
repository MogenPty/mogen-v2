"use client";

import PricingCard from "@/components/pricing/pricing-card";
import { packages } from "@/data/pricing";

export default function PricingList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {packages.map((pkg, index) => (
        <PricingCard key={pkg.name} pricingPackage={pkg} cardIndex={index} />
      ))}
    </div>
  );
}
