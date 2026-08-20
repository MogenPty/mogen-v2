import ArticlesGrid from "@/components/blog/articles-grid";
import FeaturedArticle from "@/components/blog/featured-article";
import BlogHeader from "@/components/blog/header";

export const metadata = {
  title: "Web & Digital Insights for SA Businesses",
  description:
    "Insights and expertise from MOGEN, a Pretoria-based digital innovation agency. Explore articles on web development, digital marketing, software solutions, and digital transformation for SMEs in South Africa.",

  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    type: "website",
  },
};

export default function Blog() {
  return (
    <div className="bg-gray-50 py-20 mx-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <BlogHeader />

        {/* Featured Article */}
        <FeaturedArticle />

        {/* Articles Grid */}
        <ArticlesGrid />
      </div>
    </div>
  );
}
