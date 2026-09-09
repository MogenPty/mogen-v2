"use client";

import { ArrowRightIcon, PhoneIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn, createPageUrl } from "@/lib/utils";

export interface CallToAction {
  title: string;
  subtitle: string;
  textColor?: string;
}

export default function CallToActionBlock({
  textColor,
  title,
  subtitle,
}: Readonly<CallToAction>) {
  return (
    <section className="py-12">
      <div className="mx-auto">
        <div className="bg-linear-to-br from-pink-500 to-blue-600 p-8 neo-brutalist-border neo-brutalist-shadow transform -rotate-1">
          <div className="bg-white p-6 neo-brutalist-border transform rotate-2 text-center">
            <h2 className="text-2xl lg:text-4xl font-black mb-6">
              <span
                className={cn("block transform rotate-1 uppercase", textColor)}
              >
                {title}
              </span>
            </h2>
            <p className="text-xl font-bold text-gray-700 mb-8 max-w-2xl mx-auto leading-normal md:leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={createPageUrl("Contact")}>
                <Button className="bg-purple-500 text-white font-black text-lg px-6 py-2 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                  GET FREE QUOTE
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://wa.me/27718631884">
                <Button className="bg-lime-400 text-black font-black text-lg px-6 py-2 neo-brutalist-border neo-brutalist-shadow hover:bg-lime-500 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  CALL NOW
                </Button>
              </Link>
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
