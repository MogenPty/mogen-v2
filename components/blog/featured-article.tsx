"use client";

import {
  ArrowRightIcon,
  BookIcon,
  TagIcon,
  UserIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { type Article, sampleArticles } from "@/data/articles";
import { createPageUrl, list } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export default function FeaturedArticle() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = () => {
      setIsLoading(true);
      const data = list(sampleArticles);

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
      }
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  if (isLoading)
    return (
      <Skeleton className="w-full h-96 neo-brutalist-border neo-brutalist-shadow mb-16" />
    );

  if (!featuredArticle) return;

  return (
    <section className="mb-20">
      <div className="bg-white neo-brutalist-border neo-brutalist-shadow flex flex-col lg:flex-row overflow-hidden">
        {featuredArticle.featuredImage && (
          <div className="min-h-80 lg:min-h-0 order-1 lg:order-2">
            <Image
              width={900}
              height={400}
              src={featuredArticle.featuredImage}
              alt={featuredArticle.title}
              loading="lazy"
              className="w-full h-full object-cover neo-brutalist-border border-t-0 border-b-0 border-r-0"
            />
          </div>
        )}
        <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
          <div className="bg-lime-400 text-black px-3 py-1 neo-brutalist-border-thin font-black text-xs inline-block mb-4">
            FEATURED POST
          </div>
          <h2 className="text-4xl font-black mb-4">{featuredArticle.title}</h2>
          <div className="flex items-center justify-between gap-4 text-sm font-bold text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <BookIcon className="w-4 h-4" /> {featuredArticle.category}
            </span>
            <span className="flex items-center gap-1">
              <UserIcon className="w-4 h-4" /> {featuredArticle.author}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <TagIcon className="w-4 h-4" /> {featuredArticle.tags?.join(", ")}
            </span>
          </div>
          <p className="text-lg font-bold text-gray-700 mb-8">
            {featuredArticle.excerpt}
          </p>
          <Link href={createPageUrl(`blog/${featuredArticle.slug}`)}>
            <Button className="bg-purple-500 text-white font-black py-3 px-6 neo-brutalist-border neo-brutalist-shadow hover:cursor-pointer">
              READ MORE <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
