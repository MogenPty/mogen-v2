"use client";

import { ArrowSquareOutIcon, EyesIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PortfolioHeader from "@/components/portfolio/header";
import portfolioItems from "@/data/portfolio";
import ServiceCTA from "@/components/service/cta-section";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Local Business",
    "NGO",
    "Startup",
    "Professional",
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PortfolioHeader />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 font-black text-sm neo-brutalist-border neo-brutalist-shadow-sm transition-all duration-200 transform hover:scale-105 hover:cursor-pointer ${
                filter === category
                  ? "bg-purple-500 text-white"
                  : "bg-white hover:bg-lime-400"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  width={500}
                  height={500}
                />
                <div
                  className={`absolute top-4 right-4 ${item.color} text-white px-3 py-1 neo-brutalist-border neo-brutalist-shadow-sm font-black text-xs`}
                >
                  {item.category.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-gray-600 font-bold mb-4">
                  {item.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-purple-600 hover:underline"
                  >
                    <EyesIcon
                      className="w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>VIEW DETAILS</span>
                  </Link>
                  <Link
                    href={item.clientUrl}
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
                  >
                    <ArrowSquareOutIcon
                      className="w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>SHOWCASE</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceCTA />
    </div>
  );
}
