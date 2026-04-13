"use client";

import {
  ArrowRightIcon,
  CodeIcon,
  MegaphoneIcon,
  PaletteIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import HighlightedText from "@/components/shared/highlighted-text";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export default function ServicesSection() {
  const services = [
    {
      icon: CodeIcon,
      title: "WEB DEVELOPMENT",
      description:
        "Custom websites that work perfectly on all devices. Fast, secure, and built to convert visitors into customers.",
      color: "bg-blue-600",
      borderColor: "border-blue-600",
    },
    {
      icon: PaletteIcon,
      title: "BRAND IDENTITY",
      description:
        "Logos, colors, and visual systems that make your business unforgettable. Stand out from the competition.",
      color: "bg-purple-500",
      borderColor: "border-pink-500",
    },
    {
      icon: MegaphoneIcon,
      title: "DIGITAL MARKETING",
      description:
        "Get found online with SEO, social media, and content that actually brings in new customers.",
      color: "bg-lime-400",
      borderColor: "border-lime-400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-purple-500 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6">
            WHAT WE DO
          </div>
          <h2 className="text-5xl font-black mb-6">
            <span className="block transform -rotate-1">SERVICES THAT</span>
            <span className="block text-blue-600 transform rotate-1">
              GET RESULTS
            </span>
          </h2>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-normal md:leading-[1.7]">
            We don&apos;t just build websites. We create digital experiences
            that
            <HighlightedText className="bg-lime-400 ml-1">
              DRIVE BUSINESS GROWTH
            </HighlightedText>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`${service.color} w-16 h-16 mb-6 neo-brutalist-border neo-brutalist-shadow-sm flex items-center justify-center`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-gray-600 font-bold mb-6">
                {service.description}
              </p>
              <div
                className={`w-full h-2 ${service.color} neo-brutalist-border-thin`}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={createPageUrl("Services")}>
            <Button className="bg-black text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-gray-800 transform hover:scale-105 transition-all duration-200">
              ALL SERVICES
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
