"use client";

import { ArrowRightIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import HighlightedText from "@/components/shared/highlighted-text";
import { Button } from "@/components/ui/button";
import portfolioItems from "@/data/portfolio";
import { createPageUrl } from "@/lib/utils";

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-lime-400 text-black px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6">
            OUR WORK
          </div>
          <h2 className="text-5xl font-black mb-6">
            <span className="block transform rotate-1">PROJECTS THAT</span>
            <span className="block text-purple-500 transform -rotate-1">
              MAKE IMPACT
            </span>
          </h2>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-normal md:leading-[1.7]">
            Real results for real businesses. See how we&apos;ve helped local
            companies
            <HighlightedText className="bg-purple-500 text-white ml-1">
              GROW ONLINE
            </HighlightedText>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.slice(0, 3).map((item, index) => (
            <div
              key={item.title}
              className={`bg-white neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div
                  className={`absolute top-4 right-4 ${item.color} text-white px-3 py-1 neo-brutalist-border neo-brutalist-shadow-sm font-black text-xs`}
                >
                  {item.category.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                <p className="text-gray-600 font-bold mb-4">
                  {item.description}
                </p>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
                  aria-label={`View project: ${item.title}`}
                >
                  <ArrowSquareOutIcon className="w-4 h-4" aria-hidden="true" />
                  <span>VIEW PROJECT</span>
                </Link>{" "}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={createPageUrl("Portfolio")}>
            <Button className="bg-purple-500 text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
              VIEW ALL WORK
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
