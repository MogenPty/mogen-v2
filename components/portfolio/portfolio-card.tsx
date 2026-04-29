"use client";

import { ArrowSquareOutIcon, EyesIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { categories, type Project } from "@/data/portfolio";

interface Props {
  item: Project;
  className?: string;
}

export default function PortfolioCard(props: Props) {
  const item = props.item;
  const category = categories.find((c) => c.name === item.category);
  return (
    <div
      className={`bg-white neo-brutalist-border neo-brutalist-shadow transform ${props.className} hover:scale-105 transition-all duration-300 overflow-hidden`}
    >
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover"
          width={500}
          height={500}
          loading="lazy"
        />
        <div
          className={`absolute top-4 right-4 ${category?.color ?? item.color} text-white px-3 py-1 neo-brutalist-border neo-brutalist-shadow-sm font-black text-xs`}
        >
          {item.category.toUpperCase()}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black mb-2">{item.title}</h3>
        <p className="text-gray-600 font-bold mb-4">{item.description}</p>

        <div
          className={`w-full h-2 ${category?.color ?? item.color} neo-brutalist-border-thin`}
        ></div>
        <div className="flex flex-col md:flex-row gap-2 md:justify-between mt-4">
          <Link
            href={`/portfolio/${item.slug}`}
            className="flex items-center gap-2 text-sm font-bold text-purple-600 hover:underline"
          >
            <EyesIcon
              className="w-4 h-4"
              aria-hidden="true"
              focusable="false"
            />
            <span>VIEW DETAILS</span>
          </Link>

          {item.clientUrl && (
            <Link
              href={item.clientUrl}
              className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
            >
              <ArrowSquareOutIcon
                className="w-4 h-4"
                aria-hidden="true"
                focusable="false"
              />
              <span>SHOWCASE</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
