"use client";

import { motion } from "framer-motion";
import { Product } from "@/app/data/shop";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@heroui/button";

interface RelatedProductsProps {
  products: Product[];
  currentId: string;
}

export default function RelatedProducts({
  products,
  currentId,
}: RelatedProductsProps) {
  const router = useRouter();

  const related = products.filter((p) => p.productId !== currentId).slice(0, 6); // max 6 related

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-4">You may also like</h2>
      <div
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{
          // Enable momentum scrolling on iOS
          WebkitOverflowScrolling: "touch",
          // Hide scrollbar on all browsers
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {related.map((product) => (
          <motion.div
            key={product.productId}
            className="min-w-[200px] rounded-xl p-4 flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/product/${product.slug}`)}
          >
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-32 h-32 object-contain mb-2"
            />
            <div className="text-sm font-medium text-center">
              {product.name}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              KES {product.pricing[0].price.toLocaleString()}
            </div>

            <Button
              variant="faded"
              color="primary"
              radius="full"
              size="sm"
              className="mt-4"
              onPress={() => router.push(`/product/${product.slug}`)}
            >
              View
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
