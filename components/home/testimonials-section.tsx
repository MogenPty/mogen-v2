"use client";

import { testimonials } from "@/data/testimonials";
import TestimonialBlock from "../shared/testimonial-block";

export default function TestimonialsSection() {
  const _testimonials = testimonials["web-development"];

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
          {_testimonials.map((testimonial, index) => (
            <TestimonialBlock
              key={`${testimonial.content.slice(0, 15)}_${index}`}
              testimony={testimonial.content}
              rating={testimonial.rating}
              color={testimonial.color}
              author={testimonial.author}
              business={testimonial.business}
              className={`${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
