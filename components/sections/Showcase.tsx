"use client";

import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import TradeInForm from "@/components/forms/TradeInForm";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Showcase: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // Refs with proper TypeScript types
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Create main timeline for header content
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 25%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      // Header animations sequence - all from center
      // 1. Logo animation
      headerTimeline.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
      );

      // 2. Tagline animation
      headerTimeline.fromTo(
        taglineRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // 3. Heading animation
      headerTimeline.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // 4. Subheading animation
      headerTimeline.fromTo(
        subheadingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // 5. Button animation
      headerTimeline.fromTo(
        buttonRef.current,
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

      // Masonry columns animation
      const columnTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".masonry",
          start: "top 75%",
          end: "top 35%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      // Animate columns from center (no x movement)
      columnTimeline.fromTo(
        leftColumnRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
      );

      columnTimeline.fromTo(
        rightColumnRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.7",
      );

      // Individual card animations within columns
      if (leftColumnRef.current) {
        const leftCards =
          leftColumnRef.current.querySelectorAll(":scope > div");
        if (leftCards.length > 0) {
          gsap.fromTo(
            leftCards,
            {
              opacity: 0,
              y: 30,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: leftColumnRef.current,
                start: "top 75%",
                end: "top 40%",
                scrub: 1.5,
              },
            },
          );
        }
      }

      if (rightColumnRef.current) {
        const rightCards =
          rightColumnRef.current.querySelectorAll(":scope > div");
        if (rightCards.length > 0) {
          gsap.fromTo(
            rightCards,
            {
              opacity: 0,
              y: 30,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: rightColumnRef.current,
                start: "top 75%",
                end: "top 40%",
                scrub: 1.5,
              },
            },
          );
        }
      }
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section id="highlights" ref={sectionRef}>
      <div className="flex flex-col items-center justify-center">
        <img
          ref={logoRef}
          src="/logo-dark.svg"
          alt="Apple logo"
          className="w-10"
        />

        <p ref={taglineRef} className="mb-8 font-bold mt-6 text-lg">
          Trade in. Upgrade. Save.
        </p>

        <h2 ref={headingRef}>There's never been a better time to upgrade.</h2>

        <h3 ref={subheadingRef}>Here's what you get with the new iPhone 17.</h3>

        <button ref={buttonRef} onClick={onOpen}>
          Get your estimate
        </button>
      </div>

      <div className="masonry">
        <div ref={leftColumnRef} className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>A19 Pro, vapor cooled for lightning‐fast performance.</p>
          </div>

          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              iOS 26.
              <br />
              New look. <br />
              Even more magic.
            </p>
          </div>
        </div>

        <div ref={rightColumnRef} className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Apple intelligence <br />
              <span>Even more intelligence.</span>
            </p>
          </div>

          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 flex flex-col space-y-12 items-center">
        <Modal
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <TradeInForm />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default Showcase;
