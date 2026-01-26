"use client";

import { shopData } from "@/app/data/shop";
import CategoryCard from "@/components/shop/CategoryCard";

export default function CategorySection() {
  // Filter to get the main 4 categories: iPhone, MacBook, iPad, and Accessories
  const mainCategories = shopData.filter(
    (category) =>
      category.slug === "iphone" ||
      category.slug === "macbook" ||
      category.slug === "ipad" ||
      category.slug === "accessories",
  );

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
