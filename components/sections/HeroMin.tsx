"use client";

import React from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

const HeroMin = () => {
  const router = useRouter();
  return (
    <section id="heroshort" className="">
      <div>
        <h1 className="">Your go-to for apple products in Kenya</h1>
        <p className="">
          We deliver authentic Apple products with professional service and
          fast, reliable delivery across Kenya and East Africa.
        </p>
        {/*<button>Shop</button>*/}
      </div>

      <section className="flex  gap-4 items-center mt-8">
        <Button
          variant="solid"
          color="primary"
          radius="full"
          onPress={() => router.push("/shop")}
        >
          Shop
        </Button>
        <Button
          variant="bordered"
          color="primary"
          radius="full"
          className="border-1"
          onPress={() => router.push("/repairs")}
        >
          Repairs
        </Button>
      </section>

      <img src="/images/iphone-17-pro.png" alt="iphone" />
    </section>
  );
};
export default HeroMin;
