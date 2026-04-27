"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function ArticleNotFound() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl font-black">404 - ARTICLE NOT FOUND</h1>
      <p className="text-lg mt-4 font-bold">
        Sorry, we couldn&apos;t find the article you&apos;re looking for.
      </p>
      <Link href={createPageUrl("Blog")} className="mt-8 inline-block">
        <Button className="bg-blue-600 text-white font-black py-3 px-6 neo-brutalist-border neo-brutalist-shadow">
          <ArrowLeftIcon className="mr-2 w-5 h-5" />
          BACK TO BLOG
        </Button>
      </Link>
    </div>
  );
}
