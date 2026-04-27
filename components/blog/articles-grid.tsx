"use client";

import { Skeleton } from "@/components/ui/skeleton";
import type { Article } from "@/data/articles";
import ArticleCard from "./article-card";

interface Props {
  articles: Article[];
  isLoading?: boolean;
}

export default function ArticlesGrid({ articles, isLoading = false }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {isLoading
        ? Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: No need for any named keys
                key={index}
                className="bg-white p-6 neo-brutalist-border neo-brutalist-shadow transform rotate-1"
              >
                <Skeleton className="w-full h-40 mb-4" />
                <Skeleton className="w-1/4 h-4 mb-4" />
                <Skeleton className="w-full h-8 mb-2" />
                <Skeleton className="w-3/4 h-8 mb-4" />
                <Skeleton className="w-full h-10" />
              </div>
            ))
        : articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
    </div>
  );
}
