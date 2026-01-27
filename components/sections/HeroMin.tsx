"use client";

import React, { useRef } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroMin = () => {
  const router = useRouter();

  // Refs for animated elements
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Create scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      // 1. Heading animation - slides down from top center with fade
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: -40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
      );

      // 2. Paragraph animation - slides down from top center with fade
      tl.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // 3. Buttons animation - scale and fade in
      tl.fromTo(
        buttonsRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // 4. Image animation - slides up from bottom with fade and scale
      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // Add subtle continuous float animation to image (after scroll animation)
      gsap.to(imageRef.current, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          onEnter: () => {
            // Float starts when section is fully in view
          },
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="heroshort" ref={sectionRef} className="">
      <div>
        <h1 ref={headingRef} className="">
          Your go-to for apple products in Kenya
        </h1>
        <p ref={paragraphRef} className="">
          We deliver authentic Apple products with professional service and
          fast, reliable delivery across Kenya and East Africa.
        </p>
      </div>

      <section ref={buttonsRef} className="flex gap-4 items-center mt-8">
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

      <img ref={imageRef} src="/images/iphone-hero.png" alt="iphone" />
    </section>
  );
};

export default HeroMin;
