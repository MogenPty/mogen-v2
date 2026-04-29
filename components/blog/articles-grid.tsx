"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { type Article, sampleArticles } from "@/data/articles";
import { list } from "@/lib/utils";
import ArticleCard from "./article-card";

export default function ArticlesGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = () => {
      setIsLoading(true);
      const data = list(sampleArticles);
      setArticles(data);

      if (data.length > 0) {
        const featuredArticles = data.filter((article) =>
          article.tags?.includes("featured"),
        );

        let featuredArticle: Article;
        if (featuredArticles.length > 0) {
          featuredArticle = featuredArticles[0];
        } else {
          featuredArticle = data[0];
        }

        setArticles(
          data.filter((article) => article.title !== featuredArticle?.title),
        );
      }
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

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
