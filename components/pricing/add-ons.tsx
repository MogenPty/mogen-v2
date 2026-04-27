"use client";

import { CheckIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { addOns } from "@/data/pricing";
import { createPageUrl } from "@/lib/utils";

export default function PricingAddOns() {
  return (
    <div className="bg-black text-white p-8 neo-brutalist-border neo-brutalist-shadow transform -rotate-1 mb-16">
      <div className="bg-white text-black p-6 neo-brutalist-border transform rotate-2">
        <h2 className="text-3xl font-black mb-6 text-center">
          ADD-ON SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon, index) => (
            <div
              key={addon.name}
              className={`bg-gray-100 p-4 neo-brutalist-border neo-brutalist-shadow-sm transform ${index % 2 === 0 ? "rotate-1" : "-rotate-2"}`}
            >
              <h4 className="font-black text-lg mb-2">{addon.name}</h4>
              <div className="text-2xl font-black text-purple-500">
                {addon.price}
              </div>
              {addon.features && (
                <ul className="mt-4 space-y-2">
                  {addon.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-lime-500 shrink-0" />
                      <span className="font-bold text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-bold text-gray-600 mb-4">
            Need something custom? We can build anything you need!
          </p>
          <Link href={createPageUrl("Contact")}>
            <Button className="bg-lime-400 text-black font-black neo-brutalist-border neo-brutalist-shadow hover:cursor-pointer">
              GET CUSTOM QUOTE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
