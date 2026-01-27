"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import DiagnosisForm from "@/components/forms/DiagnosisForm";
import { useMediaQuery } from "react-responsive";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Repairs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Create a timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 70%",
          end: "top 30%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      // 1. Logo Animation - Fade in and scale up
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.7,
          y: -15,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      );

      // 2. Heading Animation - Fade in and slide up
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // 3. Paragraph Animation - Fade in and slide up
      tl.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // 4. Button Animation - Fade in and scale
      tl.fromTo(
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

      // 5. Video Animation - Fade in and slide up
      tl.fromTo(
        videoRef.current,
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
        "-=0.5",
      );

      // Add subtle parallax effect to the video on scroll (separate from main timeline)
      if (!isMobile) {
        gsap.to(videoRef.current, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section id="repairs" ref={sectionRef} className="translate-y-20 py-16">
      <div>
        <img
          ref={logoRef}
          src="/logo-dark.svg"
          alt="Apple logo"
          className="w-10"
        />

        <h1 ref={headingRef} className="">
          Repairs
        </h1>

        <p ref={paragraphRef} className="">
          Cracked screens, battery issues, or any other problems—our certified
          technicians deliver fast, reliable fixes.
        </p>

        <button
          ref={buttonRef}
          onClick={onOpen}
          className="flex items-center gap-3"
        >
          Talk to a Technician
        </button>

        <div ref={videoRef} className="px-4">
          <video
            className="rounded-3xl"
            width="800"
            src="/videos/game.mp4"
            loop
            muted
            autoPlay
            playsInline
          />
        </div>
      </div>

      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <DiagnosisForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Repairs;
