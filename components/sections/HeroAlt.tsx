import React from "react";
import { Button } from "@heroui/button";

const HeroAlt = () => {
  return (
    <section id="hero" className="bg-black">
      <div>
        <h1 className="">
          Your go-to for <span>apple products</span> in Kenya
        </h1>
      </div>

      <p className="content">
        We deliver authentic Apple products with professional service and fast,
        reliable delivery across Kenya and East Africa.
      </p>
      <button>Shop</button>
      <img src="/hero2.jpg" alt="iphone" />
    </section>
  );
};
export default HeroAlt;
