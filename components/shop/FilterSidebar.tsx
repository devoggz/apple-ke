"use client";

import { Category, Product } from "@/app/data/shop";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const productsForSelectedCategory: Product[] =
    categories.find((c) => c.slug === selectedCategory)?.products ?? [];

  const priceOptions = [
    { label: "All Prices", value: "" },
    { label: "Under $500", value: "under_500" },
    { label: "$500 - $1000", value: "500_1000" },
    { label: "Over $1000", value: "over_1000" },
  ];

  const statusOptions = [
    { label: "All Status", value: "" },
    { label: "In Stock", value: "IN_STOCK" },
    { label: "Out of Stock", value: "OUT_OF_STOCK" },
    { label: "Limited", value: "LIMITED" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-end flex-wrap">
      {/* Category */}
      <div className="w-full md:w-64 relative">
        <select
          className="w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-3 px-4 pr-10 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-gray-400 dark:hover:border-gray-600"
          value={selectedCategory ?? ""}
          onChange={(e) => {
            const val = e.target.value || null;
            setSelectedCategory(val);
            setSelectedProduct(null);
          }}
        >
          <option value="">Apple Products</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>

      {/* Product */}
      <div className="w-full md:w-64 relative">
        <select
          className="w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-3 px-4 pr-10 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-gray-700"
          value={selectedProduct ?? ""}
          onChange={(e) => setSelectedProduct(e.target.value || null)}
          disabled={!selectedCategory}
        >
          <option value="">Find Products</option>
          {productsForSelectedCategory.map((p) => (
            <option key={p.productId} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>

      {/* Price Range */}
      <div className="w-full md:w-64 relative">
        <select
          className="w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-3 px-4 pr-10 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-gray-400 dark:hover:border-gray-600"
          value={selectedPrice ?? ""}
          onChange={(e) => setSelectedPrice(e.target.value || null)}
        >
          {priceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>

      {/* Availability / Status */}
      <div className="w-full md:w-64 relative">
        <select
          className="w-full appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-3 px-4 pr-10 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-gray-400 dark:hover:border-gray-600"
          value={selectedStatus ?? ""}
          onChange={(e) => setSelectedStatus(e.target.value || null)}
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}
