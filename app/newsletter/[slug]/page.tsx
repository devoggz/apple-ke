"use client";

import { useParams, useRouter } from "next/navigation";
import { newsArticles } from "@/app/data/news";
import { ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import NewsCard from "@/components/news/NewsCard";

export default function NewsArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-400 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article not found
          </h1>
          <button
            onClick={() => router.push("/newsletter")}
            className="text-primary hover:underline"
          >
            Return to newsroom
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-400">
      {/* Back Button */}
      <div className="bg-white dark:bg-dark-300 border-b border-gray-200 dark:border-dark-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => router.push("/newsletter")}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Newsroom
          </button>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white dark:bg-dark-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {article.subtitle}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 pb-8 border-b border-gray-200 dark:border-dark-200">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {article.publisher}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>
              <span>{formatDate(article.datePosted)}</span>

              <div className="ml-auto flex items-center gap-4">
                <button className="hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="hover:text-primary transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white dark:bg-dark-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-dark-300 pb-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
              {article.description}
            </p>

            {/* Additional content sections - you can expand this */}
            <div className="mt-12 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Features and Innovations
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This latest development represents a significant milestone in
                  Apple's commitment to innovation and user experience. The
                  attention to detail and focus on seamless integration across
                  the ecosystem continues to set new industry standards.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Impact on the Industry
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Industry experts are calling this one of the most significant
                  updates in recent years. The combination of hardware
                  excellence and software sophistication creates an experience
                  that's greater than the sum of its parts, pushing competitors
                  to raise their game.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-dark-400 rounded-2xl p-8 border-l-4 border-primary">
                <p className="text-xl italic text-gray-700 dark:text-gray-300">
                  "This is exactly the kind of innovation that keeps Apple at
                  the forefront of technology. It's not just about specs—it's
                  about creating experiences that feel magical."
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  — Tech Industry Analyst
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 dark:bg-dark-400 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <NewsCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-white dark:bg-dark-300 border-t border-gray-200 dark:border-dark-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay in the loop
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to get the latest Apple news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-dark-200 bg-gray-50 dark:bg-dark-400 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
