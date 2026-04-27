"use client";

import { ArrowRightIcon, PhoneIcon } from "@phosphor-icons/react";
import Link from "next/link";
import HighlightedText from "@/components/shared/highlighted-text";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-pink-500 to-blue-600 p-12 neo-brutalist-border neo-brutalist-shadow transform -rotate-1">
          <div className="bg-white p-8 neo-brutalist-border transform rotate-2 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="block transform -rotate-1">READY TO START</span>
              <span className="block text-blue-600 transform rotate-1">
                YOUR PROJECT?
              </span>
            </h2>

            <p className="text-xl font-bold text-gray-700 mb-8 max-w-2xl mx-auto leading-normal md:leading-relaxed">
              Don&apos;t let another day pass without a professional online
              presence.
              <HighlightedText className="bg-lime-400 ml-1">
                GET YOUR FREE QUOTE TODAY!
              </HighlightedText>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={createPageUrl("Contact")}>
                <Button className="bg-purple-500 text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                  GET FREE QUOTE
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button className="bg-lime-400 text-black font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-lime-500 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                <PhoneIcon className="mr-2 w-5 h-5" />
                CALL NOW
              </Button>
            </div>

            <p className="text-sm font-bold text-gray-600">
              💬 WhatsApp available • 📞 Free consultation • ⚡ 24hr response
              time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
