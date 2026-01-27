"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
  Repairs,
  Showcase,
  HeroMin,
  CategorySection,
} from "@/components/sections";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount to recalculate positions
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroMin />
      <Repairs />
      <CategorySection />
      <Showcase />
    </main>
  );
}
