import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations | Mogen Pty Ltd",
  description:
    "Mogen serves Maboloka, Soshanguve and beyond. Find web development, brand identity, digital marketing and SEO services near you.",
  alternates: { canonical: "/locations" },
  openGraph: { url: "/locations", type: "website" },
};

export default function LocationsIndex() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-600 text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform -rotate-1 mb-6">
            OUR LOCATIONS
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="block transform -rotate-1">WHERE WE</span>
            <span className="block text-purple-500 transform rotate-1">WORK</span>
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto">
            Based in Maboloka and Soshanguve. Serving Tshwane, North West and South Africa — with location-specific teams and offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className={`bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:scale-[1.02] transition-all block`}
            >
              <div className="bg-lime-400 text-black px-3 py-1 neo-brutalist-border font-black text-xs inline-block mb-4">
                {loc.province} · {loc.postalCode}
              </div>
              <h2 className="text-3xl font-black mb-2">{loc.displayName.toUpperCase()}</h2>
              <p className="font-bold text-gray-600 mb-4">
                {loc.streetAddress}, {loc.name} — {loc.region}
              </p>
              <p className="font-bold text-gray-700 mb-6 line-clamp-3">{loc.intro}</p>
              <div className="flex flex-wrap gap-2">
                {loc.services.map((s) => (
                  <span key={s} className="bg-black text-white px-3 py-1 neo-brutalist-border-thin font-black text-xs uppercase">
                    {s.replace("-", " ")}
                  </span>
                ))}
              </div>
              <div className="mt-6 font-black text-purple-500">Explore {loc.displayName} →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
