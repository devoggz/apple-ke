"use client";

import { Category, Product } from "@/app/data/shop";

export default function FiltersSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedProduct,
  setSelectedProduct,
}: {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (slug: string | null) => void;
  selectedProduct: string | null;
  setSelectedProduct: (slug: string | null) => void;
}) {
  const productsForSelectedCategory: Product[] =
    categories.find((c) => c.slug === selectedCategory)?.products ?? [];

  return (
    <div className="space-y-6">
      {/* Category Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedCategory ?? ""}
          onChange={(e) => {
            const val = e.target.value || null;
            setSelectedCategory(val);
            setSelectedProduct(null);
          }}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Product Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Product</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedProduct ?? ""}
          onChange={(e) => setSelectedProduct(e.target.value || null)}
          disabled={!selectedCategory}
        >
          <option value="">All Products</option>
          {productsForSelectedCategory.map((p) => (
            <option key={p.productId} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
