"use client";

import Image from "next/image";

interface Props {
  description: string;
  image?: string;
  gallery?: string[];
  title: string;
}

export default function ServiceDetails({
  description,
  gallery,
  image,
  title,
}: Props) {
  return (
    <div className="lg:col-span-2 space-y-12">
      {/* Featured Image */}
      {image && (
        <div className="bg-white p-4 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
          <Image
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-96 object-cover neo-brutalist-border"
            width={600}
            height={400}
          />
        </div>
      )}

      {/* Service Overview */}
      <div className="bg-black text-white p-8 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
        <h2 className="text-3xl font-black text-lime-400 mb-6">
          SERVICE OVERVIEW
        </h2>
        <p className="text-lg font-bold leading-relaxed mb-6">{description}</p>
      </div>

      {/* Project Gallery */}
      {gallery && (
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
      )}
    </div>
  );
}
