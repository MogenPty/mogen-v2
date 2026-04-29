"use client";

import { useState } from "react";

import { categories, portfolioItems } from "@/data/portfolio";
import PortfolioCard from "./portfolio-card";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            type="button"
            key={category.name}
            onClick={() => setFilter(category.name)}
            className={`px-6 py-3 font-black text-sm neo-brutalist-border neo-brutalist-shadow-sm transition-all duration-200 transform hover:scale-105 hover:cursor-pointer ${
              filter === category.name
                ? `${category.color} ${category.name === "All" ? "text-black" : "text-white"}`
                : "bg-white hover:bg-lime-400"
            }`}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        {filteredItems.map((item, index) => (
          <PortfolioCard
            key={item.title}
            item={item}
            className={index % 2 === 0 ? "rotate-1" : "-rotate-1"}
          />
        ))}
      </div>
    </>
  );
}
