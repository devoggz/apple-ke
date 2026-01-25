"use client";

import { motion } from "framer-motion";
import { Product } from "@/app/data/shop";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import Button from "@/components/ui/Button";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { addItem } = useCart();

  const defaultColor =
    product.availableColors?.[0] ??
    Object.keys(product.imagesByColor ?? {})[0] ??
    "";
  const selectedPrice = product.pricing[0]?.price ?? 0;
  const heroImage =
    product.imagesByColor[defaultColor]?.[0] ?? product.heroImage;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // prevent navigating to product page
    addItem({
      product,
      quantity: 1,
      color: defaultColor,
      storage:
        product.availableStorage?.[0] ?? product.pricing[0]?.storage ?? "",
      price: selectedPrice,
    });
  };

  return (
    <motion.div
      className="border rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.03 }}
      onClick={() => router.push(`/product/${product.slug}`)}
    >
      <img
        src={heroImage}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />

      <div className="text-sm font-medium text-center">{product.name}</div>
      <div className="text-xs text-gray-500 mt-1">
        KES {selectedPrice.toLocaleString()}
      </div>

      <Button
        onClick={handleAddToCart}
        variant="secondary"
        className="mt-2 w-full text-xs py-1"
      >
        Add to Cart
      </Button>
    </motion.div>
  );
}
