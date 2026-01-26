"use client";

import { motion } from "framer-motion";
import { Category } from "@/app/data/shop";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const router = useRouter();

  return (
    <motion.div
      className="overflow-clip rounded-xl bg-gray-50 dark:bg-dark-300 h-[460px] flex flex-col items-center cursor-pointer space-y-4 transition-shadow"
      whileHover={{ scale: 1.03 }}
      onClick={() => router.push(`/shop/${category.slug}`)}
    >
      <img src="/logo-dark.svg" alt="Apple logo" className="w-8 mt-12" />

      <div className="text-lg text-dark-300 dark:text-dark-100 font-bold text-center">
        {category.name}
      </div>
      <div className="text-sm text-gray-500 text-center px-4">
        {category.description}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/shop/${category.slug}`);
        }}
        className="bg-primary text-white py-2.5 px-4 rounded-full font-medium text-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
      >
        Shop {category.name}
      </button>
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-fit object-cover"
      />
    </motion.div>
  );
}
