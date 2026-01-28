"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Category } from "@/app/data/shop";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function CategoryNav({
  categories,
  selectedCategory,
  onCategorySelectAction,
}: {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelectAction: (slug: string | null) => void;
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollContainerRef}
      className={`flex gap-6 items-center pb-4 pt-4 mx-auto ${
        isMobile
          ? "overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
          : "overflow-hidden"
      }`}
      style={{
        // Enable momentum scrolling on iOS
        WebkitOverflowScrolling: "touch",
        // Hide scrollbar on all browsers
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {categories.map((cat) => {
        const Icon =
          (Icons[cat.icon as keyof typeof Icons] as LucideIcon) || Icons.Box;
        const isActive = selectedCategory === cat.slug;

        return (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => onCategorySelectAction(isActive ? null : cat.slug)}
            className={`min-w-[120px] h-[120px] rounded-2xl flex flex-col items-center mb-12 justify-center p-4 text-center cursor-pointer apple-card ${
              isMobile ? "snap-start" : ""
            } ${isActive ? "" : ""}`}
          >
            <img src={cat.image} alt="Apple logo" className="object-cover" />
            <span className="text-sm font-medium mt-4">{cat.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
