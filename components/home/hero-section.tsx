"use client";

import {
  ArrowRightIcon,
  LightningIcon,
  MoneyIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import HighlightedText from "@/components/shared/highlighted-text";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 neo-brutalist-border neo-brutalist-shadow transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-lime-400 neo-brutalist-border neo-brutalist-shadow transform -rotate-12 opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-600 neo-brutalist-border neo-brutalist-shadow transform rotate-45 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-lime-400 text-black px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1">
              LOCAL WEB EXPERTS
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="flex flex-row">
                <span className="block transform -rotate-1 pr-4">BOLD</span>
                <span className="block text-purple-500 transform rotate-1">
                  WEB
                </span>
              </span>
              <span className="block text-blue-600 transform -rotate-1">
                SOLUTIONS
              </span>
            </h1>

            <p className="text-xl font-bold text-gray-700 max-w-lg leading-normal md:leading-[1.7] text-center sm:text-left mr-10">
              We create
              <HighlightedText className="bg-lime-400 mx-1">
                STUNNING WEBSITES
              </HighlightedText>
              and
              <HighlightedText className="bg-purple-500 text-white mx-1">
                KILLER BRANDS
              </HighlightedText>
              for local businesses in Maboloka, Soshanguve & beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-center md:text-left">
              <Link href={createPageUrl("Contact")}>
                <Button className="bg-blue-600 text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                  GET FREE QUOTE
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={createPageUrl("Portfolio")}>
                <Button className="font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow bg-white hover:bg-pink-100 transform hover:scale-105 transition-all duration-200">
                  VIEW WORK
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <LightningIcon className="w-6 h-6 text-lime-500" />
                <span className="font-bold">FAST DELIVERY</span>
              </div>
              <div className="w-8 h-1 bg-black rounded-full sm:w-2 sm:h-2 sm:rounded-full"></div>
              <div className="flex items-center gap-2">
                <MoneyIcon className="w-6 h-6 text-purple-500" />
                <span className="font-bold">AFFORDABLE RATES</span>
              </div>
              <div className="w-8 h-1 bg-black rounded-full sm:w-2 sm:h-2 sm:rounded-full"></div>
              <div className="flex items-center gap-2">
                <UsersIcon className="w-6 h-6 text-blue-600" />
                <span className="font-bold">LOCAL EXPERTS</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-linear-to-br from-blue-600 to-pink-500 p-8 neo-brutalist-border neo-brutalist-shadow transform rotate-3">
              <div className="bg-white p-6 neo-brutalist-border">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-300 neo-brutalist-border-thin transform -rotate-1"></div>
                  <div className="h-4 bg-lime-400 neo-brutalist-border-thin w-3/4 transform rotate-1"></div>
                  <div className="h-4 bg-purple-500 neo-brutalist-border-thin w-1/2 transform -rotate-1"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-16 bg-blue-200 neo-brutalist-border transform rotate-2"></div>
                    <div className="h-16 bg-lime-200 neo-brutalist-border transform -rotate-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-lime-400 px-3 py-1 neo-brutalist-border neo-brutalist-shadow font-black text-sm transform rotate-12">
              RESPONSIVE!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 neo-brutalist-border neo-brutalist-shadow font-black text-sm transform -rotate-12">
              MODERN!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
