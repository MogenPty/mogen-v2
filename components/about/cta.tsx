"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function AboutCTA() {
  return (
    <section className="py-10 md:py-20 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black mb-6">JOIN OUR MISSION</h2>
        <p className="text-xl font-bold text-gray-600 mb-8">
          We&apos;re more than an agency; we&apos;re a partner in your success.
          Let&apos;s work together to grow your business.
        </p>
        <Link href={createPageUrl("Contact")}>
          <Button className="bg-blue-600 text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
            START YOUR PROJECT
          </Button>
        </Link>
      </div>
    </section>
  );
}
