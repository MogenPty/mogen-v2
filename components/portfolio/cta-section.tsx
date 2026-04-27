"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PortfolioCTA() {
  return (
    <div className="mt-20 bg-linear-to-br from-blue-600 to-purple-600 p-12 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
      <div className="bg-white p-8 neo-brutalist-border transform -rotate-2 text-center">
        <h2 className="text-4xl font-black mb-6">
          READY FOR YOUR
          <span className="block text-purple-600">OWN PROJECT?</span>
        </h2>
        <p className="text-xl font-bold text-gray-700 mb-8">
          Let&apos;s create something amazing together!
        </p>
        <Link href="/contact">
          <Button className="hover:cursor-pointer bg-lime-400 text-black font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-lime-500 transform hover:scale-105 transition-all duration-200">
            START YOUR PROJECT
            <ArrowLeftIcon className="ml-2 w-5 h-5 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
