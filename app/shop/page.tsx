"use client";

import { useState, useMemo } from "react";
import { shopData, Category } from "@/app/data/shop";
import CategoryNav from "@/components/shop/CategoryNav";
import FiltersSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredCategories: Category[] = useMemo(() => {
    return shopData
      .map((cat) => {
        if (selectedCategory && cat.slug !== selectedCategory) return null;
        return {
          ...cat,
          products: cat.products.filter((p) =>
            selectedProduct ? p.slug === selectedProduct : true,
          ),
        };
      })
      .filter(Boolean) as Category[];
  }, [selectedCategory, selectedProduct]);

  return (
    <div className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Category Navigation */}
        <CategoryNav
          categories={shopData}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>

      {/* Filters on top - Full width with max-w-7xl */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="flex justify-between items-end">
          <FiltersSidebar
            categories={shopData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>

      {/* Products full width */}
      <div className="max-w-7xl mx-auto mt-12">
        <ProductGrid
          categories={filteredCategories}
          selectedProduct={selectedProduct}
        />
      </div>
    </div>
  );
}
