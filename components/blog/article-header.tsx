"use client";

import { CalendarIcon, UserIcon } from "@phosphor-icons/react";

import type { Article } from "@/data/articles";

interface Props {
  article: Article;
}

export default function ArticleHeader({ article }: Props) {
  return (
    <div className="text-center mb-8">
      <div className="bg-pink-100 text-pink-600 px-3 py-1 neo-brutalist-border-thin font-black text-sm inline-block mb-4">
        {article.category}
      </div>
      <h1 className="text-4xl md:text-6xl font-black mb-6">{article.title}</h1>
      <div className="flex justify-center items-center gap-6 text-md font-bold text-gray-500">
        <span className="flex items-center gap-2">
          <UserIcon className="w-5 h-5 text-blue-500" /> {article.author}
        </span>
        <span className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-lime-500" />{" "}
          {new Date(article.publishedAt).toDateString()}
        </span>
      </div>
    </div>
  );
}
