"use client";

import HighlightedText from "../shared/highlighted-text";

export default function AboutHeader() {
  return (
    <section className="text-center mb-20">
      <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6">
        OUR STORY
      </div>
      <h1 className="text-5xl lg:text-7xl font-black mb-6">
        <span className="block transform -rotate-1">YOUR LOCAL</span>
        <span className="block text-purple-500 transform rotate-1">
          DIGITAL
        </span>
        <span className="block text-lime-500 transform -rotate-1">
          PARTNERS
        </span>
      </h1>
      <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto leading-normal md:leading-[1.7]">
        Mogen was founded with one simple mission: to provide world-class
        digital services that are
        <HighlightedText className="bg-lime-400 ml-2 mr-2">
          AFFORDABLE & ACCESSIBLE
        </HighlightedText>
        for businesses in Maboloka, Soshanguve, and beyond.
      </p>
    </section>
  );
}
