"use client";

import { motion } from "framer-motion";
import { Product } from "@/app/data/shop";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

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
      <div className="flex gap-4 overflow-x-auto pb-2">
        {related.map((product) => (
          <motion.div
            key={product.productId}
            className="min-w-[180px] border rounded-xl p-4 flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/product/${product.slug}`)}
          >
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-32 object-contain mb-2"
            />
            <div className="text-sm font-medium text-center">
              {product.name}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              KES {product.pricing[0].price.toLocaleString()}
            </div>
            <Button
              onClick={() => router.push(`/product/${product.slug}`)}
              className="mt-2 w-full text-xs py-1"
              variant="secondary"
            >
              View
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
