"use client";

import { QuotesIcon } from "@phosphor-icons/react";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  testimony: string;
  author?: string;
  business?: string;
  rating?: number;
  color?: string;
  className?: string;
}

export default function TestimonialBlock({
  testimony,
  author,
  business,
  rating,
  color,
  className,
}: Readonly<Props>) {
  const _rating = rating ?? 0;
  return (
    <div
      className={cn(
        "bg-white p-8 neo-brutalist-border neo-brutalist-shadow transform",
        className,
      )}
    >
      <div className="mb-4">
        {color && (
          <QuotesIcon
            className={`w-12 h-12 ${color.replace("bg-", "text-")}`}
          />
        )}
      </div>
      <p className="text-gray-800 font-bold mb-6 text-lg">
        &ldquo;{testimony}&rdquo;
      </p>
      <div className="flex items-center mb-4">
        {[...new Array(_rating)].map((r, i) => (
          <StarIcon
            key={`${r}_${i}`}
            className="w-5 h-5 text-yellow-400 fill-yellow-500"
            aria-autocomplete="both"
          />
        ))}
        {[...Array(5 - _rating)].map((r, i) => (
          <StarIcon
            key={`${r}_${i}`}
            className="w-5 h-5 text-yellow-400"
            aria-autocomplete="both"
          />
        ))}
      </div>
      <div>
        {author && <div className="font-black text-lg">{author}</div>}
        {business && <div className="text-gray-600 font-bold">{business}</div>}
      </div>
    </div>
  );
}
