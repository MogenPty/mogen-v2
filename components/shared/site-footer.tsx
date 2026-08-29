"use client";

import { MailboxIcon, PhoneIcon } from "@phosphor-icons/react";
import Link from "next/link";

import { createPageUrl } from "@/lib/utils";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border border-white neo-brutalist-shadow font-black text-xl inline-block transform rotate-1 mb-4">
              MOGEN PTY LTD
            </div>
            <p className="text-gray-300 text-lg font-bold mb-4">
              BOLD WEB SOLUTIONS FOR LOCAL BUSINESSES
            </p>
            <p className="text-gray-400">
              Serving Brits (0250), Maboloka (0197), Pretoria (0002) and
              Soshanguve (0152) with affordable, world-class web development and
              brand identity services.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-black">
              <Link
                href="/locations/brits"
                className="bg-white text-black px-2 py-1 neo-brutalist-border-thin"
              >
                BRITS
              </Link>
              <Link
                href="/locations/maboloka"
                className="bg-white text-black px-2 py-1 neo-brutalist-border-thin"
              >
                MABOLOKA
              </Link>
              <Link
                href="/locations/pretoria"
                className="bg-white text-black px-2 py-1 neo-brutalist-border-thin"
              >
                PRETORIA
              </Link>
              <Link
                href="/locations/soshanguve"
                className="bg-white text-black px-2 py-1 neo-brutalist-border-thin"
              >
                SOSHANGUVE
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 text-lime-400">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={createPageUrl("Services")}
                  className="hover:text-lime-400 font-bold"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href={createPageUrl("Portfolio")}
                  className="hover:text-lime-400 font-bold"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  href={createPageUrl("Pricing")}
                  className="hover:text-lime-400 font-bold"
                >
                  PRICING
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-lime-400 font-bold"
                >
                  LOCATIONS
                </Link>
              </li>
              <li className="pl-3 border-l-2 border-gray-700 space-y-1 flex flex-wrap gap-x-1">
                <Link
                  href="/locations/brits"
                  className="hover:text-lime-400 font-bold text-sm"
                >
                  BRITS
                </Link>
                <span className="text-gray-600 text-sm"> · </span>
                <Link
                  href="/locations/maboloka"
                  className="hover:text-lime-400 font-bold text-sm"
                >
                  MABOLOKA
                </Link>
                <span className="text-gray-600 text-sm"> · </span>
                <Link
                  href="/locations/pretoria"
                  className="hover:text-lime-400 font-bold text-sm"
                >
                  PRETORIA
                </Link>
                <span className="text-gray-600 text-sm"> · </span>
                <Link
                  href="/locations/soshanguve"
                  className="hover:text-lime-400 font-bold text-sm"
                >
                  SOSHANGUVE
                </Link>
              </li>
              <li>
                <Link
                  href={createPageUrl("Blog")}
                  className="hover:text-lime-400 font-bold"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href={createPageUrl("FAQ")}
                  className="hover:text-lime-400 font-bold"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 text-purple-500">CONTACT</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-lime-400" />
                <span className="font-bold">+27 (0)71.863.1884</span>
              </div>
              <div className="flex items-center gap-2">
                <MailboxIcon className="w-4 h-4 text-lime-400" />
                <span className="font-bold">info@mogen.co.za</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-white mt-8 pt-8 text-center">
          <p className="text-gray-400 font-bold">
            © 2025-{new Date().getFullYear()} MOGEN PTY LTD. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
