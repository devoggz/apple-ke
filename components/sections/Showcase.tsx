"use client";

import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react";
import TradeInForm from "@/components/forms/TradeInForm";

import { ChevronRight } from "lucide-react";

const Showcase: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  return (
    <section id="highlights" className="mt-6 ">
      <div
        className="flex flex-col items-center justify-center
            "
      >
        <img src="/logo-dark.svg" alt="Apple logo" className="w-10" />

        <p className="mb-8 font-bold text-lg">Trade in. Upgrade. Save.</p>

        <h2>There’s never been a better time to upgrade.</h2>
        <h3>Here’s what you get with the new iPhone 17.</h3>

        <button onClick={onOpen} className=" flex items-center gap-3">
          Get your estimate
        </button>
      </div>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>A19 Pro, vapor cooled for lightning‑fast performance.</p>
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

        <div className="right-column">
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

      <div className="py-20 flex flex-col space-y-12 items-center ">
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
