"use client";

import { HamburgerIcon, XLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "Portfolio", url: createPageUrl("Portfolio") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "Pricing", url: createPageUrl("Pricing") },
  { title: "About", url: createPageUrl("About") },
  { title: "Blog", url: createPageUrl("Blog") },
  { title: "FAQ", url: createPageUrl("FAQ") },
  { title: "Contact", url: createPageUrl("Contact") },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  let selectedNav = location;

  if (selectedNav.split("/").length > 0)
    selectedNav = `/${selectedNav.split("/")[1]}`;

  return (
    <header className="bg-white neo-brutalist-border border-t-0 border-l-0 border-r-0 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={createPageUrl("Home")} className="flex items-center">
            <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow-sm font-black text-xl transform -rotate-1">
              MOGEN
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={`px-3 py-2 font-bold text-sm transition-all duration-200 ${
                  item.url === selectedNav
                    ? "bg-purple-500 text-white neo-brutalist-border neo-brutalist-shadow-sm transform -rotate-1"
                    : "hover:bg-lime-400 hover:neo-brutalist-border hover:neo-brutalist-shadow-sm hover:transform hover:-rotate-1"
                }`}
              >
                {item.title.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href={createPageUrl("Contact")}>
              <Button className="bg-lime-400 text-black font-black neo-brutalist-border neo-brutalist-shadow hover:bg-lime-500 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                GET QUOTE
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 neo-brutalist-border neo-brutalist-shadow bg-white"
          >
            {isMenuOpen ? (
              <XLogoIcon className="w-6 h-6" />
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white neo-brutalist-border border-t-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-bold ${
                  location === item.url
                    ? "bg-purple-500 text-white neo-brutalist-border neo-brutalist-shadow-sm"
                    : "hover:bg-lime-400 hover:neo-brutalist-border hover:neo-brutalist-shadow-sm"
                }`}
              >
                {item.title.toUpperCase()}
              </Link>
            ))}
            <Link
              href={createPageUrl("Contact")}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full mt-4"
            >
              <Button className="w-full bg-lime-400 text-black font-black neo-brutalist-border neo-brutalist-shadow">
                GET QUOTE
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
