import TradeInForm from "@/components/forms/TradeInForm";
import React from "react";

export default function TradeInPage() {
  return (
    <div className="flex flex-col items-center justify-center translate-y-12 mb-12">
      <img src="/logo-dark.svg" alt="Apple logo" className="mb-2 w-10" />

      <h1 className="text-dark-100 font-semibold tracking-normal py-8 md:py-4 text-4xl md:text-6xl lg:text-7xl text-center max-w-lg mx-auto">
        Trade In. Upgrade. Save.
      </h1>

      <TradeInForm />
    </div>
  );
}
