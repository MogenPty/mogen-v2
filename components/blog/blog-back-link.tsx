"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { createPageUrl } from "@/lib/utils";

export default function BlogBackLink() {
  return (
    <Link
      href={createPageUrl("Blog")}
      className="inline-flex items-center gap-2 font-black mb-8 group"
    >
      <div className="bg-white p-2 neo-brutalist-border neo-brutalist-shadow-sm group-hover:bg-lime-400 transition-colors">
        <ArrowLeftIcon className="w-5 h-5" />
      </div>
      <span>BACK TO ALL ARTICLES</span>
    </Link>
  );
}
