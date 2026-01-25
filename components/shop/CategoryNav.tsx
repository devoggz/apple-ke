"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Category } from "@/app/data/shop";

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
    <div className="flex gap-6 overflow-x-auto pb-4">
      {categories.map((cat) => {
        const Icon =
          (Icons[cat.icon as keyof typeof Icons] as LucideIcon) || Icons.Box;
        const isActive = selectedCategory === cat.slug;

        return (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => onCategorySelect(isActive ? null : cat.slug)}
            className={`min-w-[120px] h-[120px] rounded-2xl border flex flex-col items-center justify-center text-center cursor-pointer apple-card ${
              isActive ? "border-black bg-gray-100" : "border-gray-200"
            }`}
          >
            <Icon size={32} className="text-gray-600 mb-2" />
            <span className="text-sm font-medium">{cat.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
