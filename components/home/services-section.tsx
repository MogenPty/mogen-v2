"use client";

import ServicesActions from "@/components/service/actions";
import ServicesList from "@/components/service/services-list";
import HighlightedText from "@/components/shared/highlighted-text";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-purple-500 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6">
            WHAT WE DO
          </div>
          <h2 className="text-5xl font-black mb-6">
            <span className="block transform -rotate-1">SERVICES THAT</span>
            <span className="block text-blue-600 transform rotate-1">
              GET RESULTS
            </span>
          </h2>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-normal md:leading-[1.7]">
            We don&apos;t just build websites. We create digital experiences
            that
            <HighlightedText className="bg-lime-400 ml-1">
              DRIVE BUSINESS GROWTH
            </HighlightedText>
          </p>
        </div>

        <ServicesList />
        <ServicesActions />
      </div>
    </section>
  );
}
