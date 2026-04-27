"use client";

import { toSnakeCase } from "@/lib/utils";
import { QuotesIcon, StarIcon } from "@phosphor-icons/react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "THABO MOLEFE",
      business: "Molefe Plumbing Services",
      content:
        "Mogen built us an amazing website that brings in new customers every week. Professional, fast, and affordable!",
      rating: 4,
      color: "bg-blue-600",
    },
    {
      name: "NOMSA DLAMINI",
      business: "Community Care NGO",
      content:
        "They understood our mission and created a website that perfectly represents our work. Donations have increased significantly.",
      rating: 5,
      color: "bg-purple-500",
    },
    {
      name: "SIPHO NKOSI",
      business: "InnovateSA Startup",
      content:
        "The team delivered exactly what we needed - a modern, professional site that converts visitors into leads.",
      rating: 5,
      color: "bg-lime-400",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-lime-400 text-black px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6">
            CLIENT LOVE
          </div>
          <h2 className="text-5xl font-black text-white mb-6">
            <span className="block transform -rotate-1">WHAT OUR</span>
            <span className="block text-purple-500 transform rotate-1">
              CLIENTS SAY
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}_${index}`}
              className={`bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <div className="mb-4">
                <QuotesIcon
                  className={`w-12 h-12 ${testimonial.color.replace("bg-", "text-")}`}
                />
              </div>
              <p className="text-gray-800 font-bold mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={`${toSnakeCase(testimonial.name)}_${testimonial.rating}_${i}`}
                    className="w-5 h-5 text-yellow-400 fill-yellow-500"
                    aria-autocomplete="both"
                  />
                ))}
              </div>
              <div>
                <div className="font-black text-lg">{testimonial.name}</div>
                <div className="text-gray-600 font-bold">
                  {testimonial.business}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
