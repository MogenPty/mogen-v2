import type { Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";

import ArticleHeader from "@/components/blog/article-header";
import ArticleNotFound from "@/components/blog/article-not-found";
import BlogBackLink from "@/components/blog/blog-back-link";
import CTASection from "@/components/home/cta-section";
import { sampleArticles } from "@/data/articles";
import { BASE_KEYWORDS } from "@/data/seo";
import { generateSlug, list } from "@/lib/utils";

// import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await list(sampleArticles);
  return articles.map((article) => ({
    slug: generateSlug(article.title),
  }));
}

const getArticleBySlug = async (slug: string) => {
  const articles = await list(sampleArticles);
  const article = articles.find(
    (item) => (item.slug ?? generateSlug(item.title)) === slug,
  );
  return article;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      ...(article.tags ?? []).map((tag) => tag.toLowerCase()),
      ...(article.category ?? "").toLowerCase(),
      ...article.title.toLowerCase().split(" "),
      ...BASE_KEYWORDS,
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    authors: [{ name: article.author }, { name: "MOGEN" }],
    openGraph: {
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: ["MOGEN", "/about"],
      section: article.category,
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
};

export default async function PortfolioDetail({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <ArticleNotFound />;
  }

  //   if (isLoading) {
  //     return (
  //       <div className="max-w-4xl mx-auto py-20 px-4">
  //         <Skeleton className="h-8 w-1/4 mb-8" />
  //         <Skeleton className="h-16 w-3/4 mb-4" />
  //         <Skeleton className="h-8 w-1/2 mb-8" />
  //         <Skeleton className="w-full h-96 mb-8" />
  //         <Skeleton className="h-6 w-full mb-4" />
  //         <Skeleton className="h-6 w-full mb-4" />
  //         <Skeleton className="h-6 w-5/6 mb-4" />
  //       </div>
  //     );
  //   }

  return (
    <>
      <div className="bg-white py-12 mx-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogBackLink />

          {/* Article Header */}
          <ArticleHeader article={article} />

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="mb-12 neo-brutalist-border neo-brutalist-shadow">
              <Image
                width={900}
                height={500}
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article className="article prose prose-lg lg:prose-xl max-w-none prose-headings:font-black prose-headings:text-black prose-p:text-gray-800 prose-a:text-purple-500 prose-a:font-black prose-strong:font-black prose-strong:text-black prose-blockquote:border-l-8 prose-blockquote:border-lime-400 prose-blockquote:bg-gray-100 prose-blockquote:p-4 prose-blockquote:font-black">
            <Markdown>{article.content}</Markdown>
            {/* {article.content} */}
          </article>
        </div>
      </div>
      <CTASection />
    </>
  );
}
