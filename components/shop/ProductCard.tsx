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
      className="overflow-clip rounded-xl bg-gray-50 dark:bg-dark-300 h-[460px]  flex flex-col items-center cursor-pointer space-y-4  transition-shadow"
      whileHover={{ scale: 1.02 }}
      onClick={() => router.push(`/product/${product.slug}`)}
    >
      <img src="/logo-dark.svg" alt="Apple logo" className="w-8 mt-12" />

      <div className="text-lg text-dark-300 dark:text-dark-100 font-bold text-center ">
        {product.name}
      </div>
      <div className="text-sm text-gray-500 ">
        From{" "}
        <span className="font-bold">KES {selectedPrice.toLocaleString()}</span>
      </div>
      <button
        onClick={() => router.push(`/product/${product.slug}`)}
        className=" bg-primary text-white py-2.5 px-4 rounded-full font-medium text-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
      >
        Buy
      </button>
      <img
        src={heroImage}
        alt={product.name}
        className="w-[300px] h-[300px]  object-cover "
      />
    </motion.div>
  );
}
