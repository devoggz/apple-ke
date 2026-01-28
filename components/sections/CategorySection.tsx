"use client";

import { shopData } from "@/app/data/shop";
import CategoryCard from "@/components/shop/CategoryCard";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function CategorySection() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // Refs for animated elements
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter to get the main 4 categories: iPhone, MacBook, iPad, and Accessories
  const mainCategories = shopData.filter(
    (category) =>
      category.slug === "iphone" ||
      category.slug === "macbook" ||
      category.slug === "ipad" ||
      category.slug === "accessories",
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Skip animations on mobile - just set everything to visible
      if (isMobile) {
        gsap.set([logoRef.current, headingRef.current], {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        // Also set all cards to visible on mobile
        if (gridRef.current) {
          const cards = gridRef.current.querySelectorAll(":scope > div");
          if (cards.length > 0) {
            gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
          }
        }
        return;
      }

      // Desktop animations below
      // Logo and heading animation
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 45%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Animate logo
      headerTimeline.fromTo(
        logoRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
      );

      // Animate heading
      headerTimeline.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      );

      // Category cards staggered fade-in animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(":scope > div");

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 40,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: {
                each: 0.15,
                ease: "power2.out",
              },
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      }
    },
    { scope: sectionRef, dependencies: [isMobile, mainCategories.length] },
  );

  return (
    <section ref={sectionRef} className="w-full py-24 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mb-12">
        <img
          ref={logoRef}
          src="/logo-dark.svg"
          alt="Apple logo"
          className="w-10"
        />
        <h2
          ref={headingRef}
          className="text-dark-200 dark:text-dark-100 font-semibold text-3xl md:text-7xl text-center max-w-3xl mx-auto"
        >
          Store
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        >
          {mainCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
