"use client";

import { CheckIcon, LightningIcon, StarIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Package } from "@/data/pricing";
import { createPageUrl } from "@/lib/utils";
import ButtonColored from "../shared/button-colored";

interface Props {
  pricingPackage: Package;
  cardIndex: number;
}

export default function PricingCard({ pricingPackage, cardIndex }: Props) {
  return (
    <div
      key={pricingPackage.name}
      className={`relative bg-white p-8 m-4 md:mx-8 neo-brutalist-border neo-brutalist-shadow transform ${cardIndex % 2 === 0 ? "rotate-1" : "-rotate-1"} ${pricingPackage.popular ? "scale-105" : ""}`}
    >
      {pricingPackage.popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-orange-500 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm flex items-center gap-2">
            <StarIcon className="w-4 h-4" />
            POPULAR
          </div>
        </div>
      )}

      <div
        className={`${pricingPackage.backgroundColor} w-16 h-16 mb-6 ${pricingPackage.popular ? "mt-6" : ""} neo-brutalist-border neo-brutalist-shadow-sm flex items-center justify-center mx-auto`}
      >
        <LightningIcon className={`w-8 h-8 text-white`} />
      </div>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-black mb-2">{pricingPackage.name}</h3>
        <div className="text-4xl font-black mb-2">{pricingPackage.price}</div>
        <p className="text-gray-600 font-bold">{pricingPackage.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {pricingPackage.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-lime-500 shrink-0" />
            <span className="font-bold text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={createPageUrl("Contact")}>
        <ButtonColored
          foreColor={pricingPackage.foreColor}
          backgroundColor={pricingPackage.backgroundColor}
          className="w-full"
        >
          CHOOSE {pricingPackage.name}
        </ButtonColored>
      </Link>
    </div>
  );
}
