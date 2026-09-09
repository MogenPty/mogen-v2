"use client";

interface Props {
  title: string;
  category?: string;
  overview?: string;
  color?: string;
}

export default function ServiceHeader({
  title,
  category,
  overview,
  color,
}: Readonly<Props>) {
  return (
    <div className="mb-16">
      <div className="text-center">
        {category && (
          <div
            className={`${color} text-white px-4 py-2 neo-brutalist-border neo-brutalist-shadow font-black text-sm inline-block transform rotate-1 mb-6`}
          >
            {category}
          </div>
        )}
        <h1 className="text-5xl lg:text-7xl font-black mb-6">
          <span className="block transform -rotate-1">{title}</span>
        </h1>
        <p className="text-2xl font-bold text-gray-600 max-w-3xl mx-auto leading-[1.4]">
          {overview}
        </p>
      </div>
    </div>
  );
}
