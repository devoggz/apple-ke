"use client";

import { motion } from "framer-motion";
import { NewsArticle } from "@/app/data/news";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export default function NewsCard({ article, index }: NewsCardProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => router.push(`/newsletter/${article.slug}`)}
    >
      <div className="overflow-hidden rounded-2xl bg-white dark:bg-dark-300 shadow-sm  transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <motion.img
            src={article.image}
            alt={article.title}
            className="w-[600px] h-[460px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-3">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium">{article.publisher}</span>
            <span>•</span>
            <span>{formatDate(article.datePosted)}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 line-clamp-1">
            {article.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
            {article.description}
          </p>

          {/* Read More Link */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
              Read more
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
