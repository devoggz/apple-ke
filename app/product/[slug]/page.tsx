"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { shopData, Product } from "@/app/data/shop";
import { useCart } from "@/components/cart/CartProvider";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { Tabs } from "@/components/ui/Tabs";
import Button from "@/components/ui/Button";
import { CartIcon } from "@heroui/shared-icons";

export default function ProductDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap the params promise
  const params = React.use(paramsPromise);
  const { slug } = params;

  const router = useRouter();
  const { addItem } = useCart();

  const product = shopData
    .flatMap((c) => c.products)
    .find((p) => p.slug === slug) as Product | undefined;

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-24 px-4 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="text-sm text-gray-500 mt-2">
          We couldn't locate that product.
        </p>
      </div>
    );
  }

  // Default selections
  const defaultColor =
    product.availableColors?.[0] ??
    Object.keys(product.imagesByColor ?? {})[0] ??
    "";
  const defaultStorage =
    product.availableStorage?.[0] ?? product.pricing?.[0]?.storage ?? "";

  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [selectedStorage, setSelectedStorage] = useState(defaultStorage);
  const [quantity, setQuantity] = useState(1);

  // Price recalculation
  const selectedPrice = useMemo(() => {
    const match = product.pricing.find((p) => p.storage === selectedStorage);
    return match?.price ?? product.pricing[0]?.price ?? 0;
  }, [selectedStorage, product.pricing]);

  // Cart actions
  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      color: selectedColor,
      storage: selectedStorage,
      price: selectedPrice,
    });
  };

  const handleBuyNow = () => {
    addItem({
      product,
      quantity,
      color: selectedColor,
      storage: selectedStorage,
      price: selectedPrice,
    });
    router.push("/checkout");
  };

  // Images based on selected color
  const productImages = product.imagesByColor[selectedColor] ?? [
    product.heroImage,
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT - Images */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={productImages[0]}
            alt={product.name}
            className="w-full h-[420px] object-contain rounded-2xl bg-white p-6"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
          />

          {/* Thumbnails */}
          <div className="flex gap-3">
            {productImages.map((src, i) => (
              <button
                key={i}
                className="w-20 h-20 rounded-lg border flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`${product.name} ${i}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Color selector */}
          <div>
            <div className="text-sm font-medium mb-2">Colors</div>
            <div className="flex items-center gap-3">
              {product.availableColors.map((color) => {
                const isActive = color === selectedColor;
                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex flex-col items-center gap-1 text-xs ${isActive ? "opacity-100" : "opacity-70"}`}
                  >
                    <div
                      title={color}
                      className={`w-8 h-8 rounded-full border ${isActive ? "ring-2 ring-offset-1 ring-black" : ""}`}
                      style={{
                        backgroundColor:
                          [
                            "black",
                            "white",
                            "blue",
                            "red",
                            "pink",
                            "green",
                            "silver",
                            "gray",
                          ].find((k) => color.toLowerCase().includes(k)) ??
                          "#f3f3f4",
                      }}
                    />
                    <span className="text-[11px]">{color}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Product details */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-sm text-gray-600 mt-2">
            {product.shortDescription}
          </p>

          <div className="mt-6">
            <div className="text-xs text-gray-500">Price</div>
            <div className="text-2xl font-bold mt-1">
              KES {selectedPrice.toLocaleString()}
            </div>
          </div>

          {/* Storage selector */}
          {product.availableStorage?.length && (
            <div className="mt-6">
              <label className="text-sm font-medium">Storage</label>
              <div className="flex gap-3 mt-2">
                {product.availableStorage.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStorage(s)}
                    className={`px-3 py-2 rounded-lg border ${s === selectedStorage ? "bg-black text-white" : "bg-white"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <div className="text-sm font-medium">Quantity</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg border flex items-center justify-center"
              >
                −
              </button>
              <div className="w-8 text-center">{quantity}</div>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-lg border flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 w-full flex gap-3">
            {/*<button*/}
            {/*  onClick={handleAddToCart}*/}
            {/*  className="bg-primary text-white py-2.5 px-4 flex gap-3 items-center rounded-full font-medium text-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out"*/}
            {/*>*/}
            {/*  Add to Cart*/}
            {/*  <img src="/cart.svg" alt="Cart" />*/}
            {/*</button>*/}
            <button
              onClick={handleBuyNow}
              className="bg-green-500 text-white py-2.5 px-4 flex gap-3 items-center rounded-full font-medium text-sm cursor-pointer hover:bg-gray-50 hover:text-black transition-all duration-300 ease-in-out"
            >
              Buy Now
            </button>
            <button className="bg-primary text-white py-2.5 px-4 flex gap-3 items-center rounded-full font-medium text-sm cursor-pointer hover:bg-gray-50 hover:text-black transition-all duration-300 ease-in-out">
              WhatsApp Order
              <img src="/cart.svg" alt="Cart" />
            </button>
          </div>

          {/* Metadata */}
          <div className="mt-6 text-sm text-gray-500">
            <div>
              Rating: {product.rating} · {product.reviewsCount} reviews
            </div>
            <div className="mt-2">
              Status:{" "}
              <span className="font-medium">
                {product.status.replace("_", " ")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs: Description / What's in the box / Reviews */}
      <div className="mt-12">
        <Tabs
          tabs={[
            {
              label: "Description",
              content: (
                <div className="prose max-w-none">
                  {product.fullDescription}
                </div>
              ),
            },
            {
              label: "What’s in the box",
              content: (
                <ul className="list-disc pl-5">
                  {product.whatsInTheBox.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ),
            },
            {
              label: "Reviews",
              content: (
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.reviewsCount} reviews
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border">
                      <div className="text-sm font-medium">Jane — 5 ★</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Excellent device, fast and reliable.
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border">
                      <div className="text-sm font-medium">Peter — 4 ★</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Great value, camera could be better.
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* Related products */}
      <RelatedProducts
        products={shopData.flatMap((c) => c.products)}
        currentId={product.productId}
      />
    </div>
  );
}
