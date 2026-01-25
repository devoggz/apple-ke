"use client";

import { Category, Product } from "@/app/data/shop";
import ProductCard from "@/components/shop/ProductCard";

export default function ProductGrid({
  categories,
  selectedProduct,
}: {
  categories: Category[];
  selectedProduct: string | null;
}) {
  const productsToShow: Product[] = categories.flatMap((cat) =>
    cat.products.filter((p) =>
      selectedProduct ? p.slug === selectedProduct : true,
    ),
  );

  if (productsToShow.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">No products found</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {productsToShow.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
}
