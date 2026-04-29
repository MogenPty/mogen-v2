"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Article } from "@/data/articles";
import { createPageUrl, generateSlug } from "@/lib/utils";
import { TagIcon } from "@phosphor-icons/react";

interface Props {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: Props) {
  return (
    <div
      key={article.id}
      className={`bg-white neo-brutalist-border neo-brutalist-shadow transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col`}
    >
      {article.articleImage && (
        <Image
          width={365}
          height={192}
          src={article.articleImage}
          alt={article.title}
          className="w-full h-48 object-cover"
          loading="eager"
        />
      )}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 neo-brutalist-border-thin">
            {article.category}
          </span>
          <span>{new Date(article.publishedAt).toDateString()}</span>
        </div>
        <h3 className="text-2xl font-black mb-4 grow">{article.title}</h3>
        <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mb-6">
          <span className="flex items-center gap-1">
            <TagIcon className="w-4 h-4" /> {article.tags?.join(", ")}
          </span>
        </div>
        <p className="font-bold text-gray-600 mb-4">{article.excerpt}</p>
        <Link
          href={createPageUrl(
            `Blog/${article.slug ?? generateSlug(article.title)}`,
          )}
          className="mt-auto"
        >
          <Button
            variant="outline"
            className="w-full font-black neo-brutalist-border neo-brutalist-shadow-sm bg-white hover:cursor-pointer"
          >
            READ ARTICLE
          </Button>
        </Link>
      </div>
    </div>
  );
}
