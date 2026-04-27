"use client";

import { values } from "@/data/about";

export default function AboutValues() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black mb-12 text-center text-white">
          OUR VALUES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-white text-black p-6 neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <value.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-black mb-2">{value.title}</h3>
              <p className="font-bold text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
