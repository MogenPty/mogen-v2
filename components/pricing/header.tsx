"use client";

import HighlightedText from "@/components/shared/highlighted-text";

export default function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6">
        TRANSPARENT PRICING
      </div>
      <h1 className="text-5xl lg:text-7xl font-black mb-6">
        <span className="block transform -rotate-1">NO HIDDEN</span>
        <span className="block text-purple-500 transform rotate-1">
          FEES OR
        </span>
        <span className="block text-lime-500 transform -rotate-1">
          SURPRISES
        </span>
      </h1>
      <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-normal md:leading-[1.7]">
        Choose the package that fits your business. All prices include
        everything you need to
        <HighlightedText className="bg-lime-400 ml-2">
          GET ONLINE FAST
        </HighlightedText>
      </p>
    </div>
  );
}
