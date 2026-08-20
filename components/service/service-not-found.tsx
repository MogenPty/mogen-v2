"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function ServiceNotFound() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl font-black">404 - SERVICE NOT FOUND</h1>
      <p className="text-lg mt-4 font-bold">
        Sorry, we couldn&apos;t find the service you&apos;re looking for.
      </p>
      <Link href={createPageUrl("Services")} className="mt-8 inline-block" asChild>
        <Button className="bg-blue-600 text-white font-black py-3 px-6 neo-brutalist-border neo-brutalist-shadow">
          <ArrowLeftIcon className="mr-2 w-5 h-5" />
          BACK TO SERVICES
        </Button>
      </Link>
    </div>
  );
}
