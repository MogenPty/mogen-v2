"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function ServicesActions() {
  return (
    <div className="text-center">
      <Link href={createPageUrl("Services")}>
        <Button className="bg-black text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
          ALL SERVICES
          <ArrowRightIcon className="ml-2 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
}
