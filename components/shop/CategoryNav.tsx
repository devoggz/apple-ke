"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Category } from "@/app/data/shop";
import React from "react";

export default function CategoryNav({
  categories,
  selectedCategory,
  onCategorySelect,
}: {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (slug: string | null) => void;
}) {
  return (
    <div className="flex gap-6 items-center overflow-hidden pb-4 pt-4 mx-auto">
      {categories.map((cat) => {
        const Icon =
          (Icons[cat.icon as keyof typeof Icons] as LucideIcon) || Icons.Box;
        const isActive = selectedCategory === cat.slug;

        return (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => onCategorySelect(isActive ? null : cat.slug)}
            className={`min-w-[120px] h-[120px] rounded-2xl  flex flex-col items-center mb-12 justify-center p-4  text-center cursor-pointer apple-card ${
              isActive ? "" : ""
            }`}
          >
            <img src={cat.image} alt="Apple logo" className=" object-cover" />

            {/*<Icon size={32} className="text-gray-600 mb-2" />*/}
            <span className="text-sm font-medium mt-4">{cat.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
