"use client";

import { useEffect, useState } from "react";
import ArticlesGrid from "@/components/blog/articles-grid";
import FeaturedArticle from "@/components/blog/featured-article";
import BlogHeader from "@/components/blog/header";
import { Skeleton } from "@/components/ui/skeleton";
import { type Article, sampleArticles } from "@/data/articles";
import { BASE_KEYWORDS } from "@/data/seo";
import { list } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description:
    "Insights and expertise from MOGEN, a Pretoria-based digital innovation agency. Explore articles on web development, digital marketing, software solutions, and digital transformation for SMEs in South Africa.",
  keywords: [
    "blog",
    "insights",
    "expertise",
    "articles",
    "tips",
    "updates",
    "news",
    "information",
    "knowledge",
    ...BASE_KEYWORDS,
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    type: "website",
  },
};

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);

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
        setFeaturedArticle(featuredArticle);
        setArticles(
          data.filter((article) => article.title !== featuredArticle?.title),
        );
      }
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  return (
    <div className="bg-gray-50 py-20 mx-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <BlogHeader />

        {/* Featured Article */}
        {isLoading ? (
          <Skeleton className="w-full h-96 neo-brutalist-border neo-brutalist-shadow mb-16" />
        ) : (
          featuredArticle && <FeaturedArticle article={featuredArticle} />
        )}

        {/* Articles Grid */}
        <ArticlesGrid articles={articles} isLoading={isLoading} />
      </div>
    </div>
  );
}
