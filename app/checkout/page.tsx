"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { counties, calculateDeliveryFee } from "@/app/lib/delivery";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();

  const [county, setCounty] = useState("Nairobi");
  const [mpesaLoading, setMpesaLoading] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const deliveryFee = calculateDeliveryFee(county);
  const grandTotal = total + deliveryFee;

  const handlePayment = (method: "mpesa" | "card") => {
    if (method === "mpesa") setMpesaLoading(true);
    if (method === "card") setCardLoading(true);

    setTimeout(() => {
      setMpesaLoading(false);
      setCardLoading(false);
      setPaid(true);
      clearCart();
      router.push("/user/123"); // redirect after payment
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-semibold mb-10">Checkout</h1>

      {/* CART SUMMARY */}
      <div className="apple-card p-6 mb-10">
        {items.map((item, idx) => (
          <div
            key={`${item.product.productId}-${item.color}-${item.storage}-${idx}`}
            className="flex justify-between mb-4 text-sm"
          >
            <span>
              {item.product.name} ({item.color}/{item.storage}) ×{" "}
              {item.quantity}
            </span>
            <span>KES {(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          placeholder="Full Name"
          className="w-full border rounded-xl p-3"
        />
        <input
          placeholder="Email Address"
          className="w-full border rounded-xl p-3"
        />
        <input
          placeholder="Phone Number"
          className="w-full border rounded-xl p-3"
        />
        <input
          placeholder="Delivery Address"
          className="w-full border rounded-xl p-3"
        />

        {/* COUNTY PICKER */}
        <select
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className="w-full border rounded-xl p-3"
        >
          {counties.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* CARD PAYMENT INPUTS */}
        <input
          placeholder="Card Number"
          className="w-full border rounded-xl p-3"
        />
        <input
          placeholder="Expiry MM/YY"
          className="w-full border rounded-xl p-3"
        />
        <input placeholder="CVV" className="w-full border rounded-xl p-3" />
        <input
          placeholder="Cardholder Name"
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* TOTALS */}
      <div className="apple-card p-6 mt-10 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>KES {total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>
            {deliveryFee === 0 ? "Free" : `KES ${deliveryFee.toLocaleString()}`}
          </span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>KES {grandTotal.toLocaleString()}</span>
        </div>
      </div>

      {/* PAYMENT */}
      <div className="mt-10 space-y-4">
        {!paid ? (
          <>
            <button
              onClick={() => handlePayment("mpesa")}
              disabled={mpesaLoading}
              className="apple-button w-full"
            >
              {mpesaLoading ? "Processing MPesa…" : "Pay with MPesa"}
            </button>
            <button
              onClick={() => handlePayment("card")}
              disabled={cardLoading}
              className="apple-button w-full"
            >
              {cardLoading ? "Processing Card…" : "Pay with Card"}
            </button>
          </>
        ) : (
          <div className="text-green-600 text-center font-medium">
            Payment Successful ✓ Redirecting…
          </div>
        )}
      </div>
    </div>
  );
}
