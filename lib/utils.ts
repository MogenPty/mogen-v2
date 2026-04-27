import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Article } from "@/data/articles";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createPageUrl = (pageName: string) => {
  if (pageName === "Home") {
    return "/";
  }
  return `/${pageName.toLowerCase()}`;
};

export const toSnakeCase = (originalText: string) =>
  originalText.replaceAll(" ", "_").toLowerCase();

export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getFormattedDate(
  publishedAt: string,
  locale: string = "en-US",
) {
  try {
    return new Date(publishedAt).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return null;
  }
}

export function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export function list(articles: Article[]) {
  // For now, just return sampleArticles sorted by publishedAt (descending)

  return articles.sort(
    (a, b) =>
      dateStringToEpoch(a.publishedAt) - dateStringToEpoch(b.publishedAt),
  );
}

export const stringToDate = (s: string): Date => new Date(s);
export const dateToEpoch = (d: Date): number => d.getTime();
export const dateStringToEpoch = (s: string): number =>
  dateToEpoch(stringToDate(s));

export async function filter(articles: Article[], slug: string) {
  return articles.filter((article) => article.slug === slug);
}
