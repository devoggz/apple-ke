"use client";

import { Category, Product } from "@/app/data/shop";
import { useState } from "react";

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
      <div className="w-fit md:w-64">
        {/*<label className="block text-sm font-medium mb-1">Category</label>*/}
        <select
          className="w-full  rounded-lg p-2 px-4"
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
      </div>

      {/* Product */}
      <div className="w-full md:w-64">
        {/*<label className="block text-sm font-medium mb-1">Product</label>*/}
        <select
          className="w-full  rounded-lg p-2"
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
      </div>

      {/* Price Range */}
      <div className="w-full md:w-64">
        {/*<label className="block text-sm font-medium mb-1">Price Range</label>*/}
        <select
          className="w-full  rounded-lg p-2"
          value={selectedPrice ?? ""}
          onChange={(e) => setSelectedPrice(e.target.value || null)}
        >
          {priceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Availability / Status */}
      <div className="w-full md:w-64">
        {/*<label className="block text-sm font-medium mb-1">Availability</label>*/}
        <select
          className="w-full  rounded-lg p-2"
          value={selectedStatus ?? ""}
          onChange={(e) => setSelectedStatus(e.target.value || null)}
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
