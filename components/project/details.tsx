"use client";

import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import HighlightedText from "@/components/shared/highlighted-text";
import { Button } from "@/components/ui/button";

interface Props {
  description: string;
  image: string;
  gallery: string[];
  scope: string[];
  title: string;
  liveUrl?: string;
}

export default function ProjectDetails({
  description,
  gallery,
  image,
  liveUrl,
  scope,
  title,
}: Props) {
  return (
    <div className="lg:col-span-2 space-y-12">
      {/* Featured Image */}
      <div className="bg-white p-4 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
        <Image
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-96 object-cover neo-brutalist-border"
          width={600}
          height={400}
        />
      </div>

      {/* Project Gallery */}
      <div className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform -rotate-1">
        <h2 className="text-3xl font-black mb-6">PROJECT GALLERY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <div
              key={image}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Image
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-48 object-cover neo-brutalist-border"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-black text-white p-8 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
        <h2 className="text-3xl font-black text-lime-400 mb-6">
          PROJECT OVERVIEW
        </h2>
        <p className="text-lg font-bold leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-4 mb-6">
          {scope.map((item) => (
            <HighlightedText key={item} className="bg-lime-400 text-black">
              {item}
            </HighlightedText>
          ))}
        </div>
        {liveUrl && (
          <div className="mt-6">
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-lime-400 hover:cursor-pointer text-black font-black px-6 py-3 neo-brutalist-border neo-brutalist-shadow hover:bg-lime-500 transform hover:scale-105 transition-all duration-200">
                <ArrowSquareOutIcon className="mr-2 w-5 h-5" />
                VISIT LIVE SITE
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
