"use client";

import { ArrowSquareOutIcon, UsersIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  clientUrl: string;
  liveUrl?: string;
}

export default function ProjectActions({ clientUrl, liveUrl }: Props) {
  return (
    <div className="space-y-4">
      <Link href={clientUrl}>
        <Button className="w-full hover:cursor-pointer bg-purple-500 text-white font-black text-lg py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200">
          <UsersIcon className="mr-2 w-5 h-5" />
          VIEW CLIENT SHOWCASE
        </Button>
      </Link>

      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            variant="outline"
            className="w-full hover:cursor-pointer font-black text-lg py-4 neo-brutalist-border neo-brutalist-shadow bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
          >
            <ArrowSquareOutIcon className="mr-2 w-5 h-5" />
            VISIT LIVE SITE
          </Button>
        </Link>
      )}
    </div>
  );
}
