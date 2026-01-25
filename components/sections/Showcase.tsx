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
    <section id="highlights" className="mt-12">
      <div
        className="flex flex-col items-center justify-center
            "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="mb-8 w-10 fill-current text-black dark:text-white"
        >
          <path d="M19.4905 8.81728C18.848 9.21752 18.3158 9.77709 17.9438 10.4436C17.5717 11.1101 17.3719 11.8618 17.3631 12.6283C17.3656 13.491 17.6168 14.3339 18.0855 15.0528C18.5542 15.7716 19.2199 16.3348 20 16.6725C19.6924 17.6823 19.2372 18.6393 18.6496 19.5112C17.8089 20.7427 16.9299 21.974 15.5924 21.974C14.2548 21.974 13.9108 21.1833 12.3694 21.1833C10.8662 21.1833 10.3312 22 9.10823 22C7.88529 22 7.03188 20.8593 6.05094 19.4594C4.75519 17.4983 4.04306 15.1983 4 12.8356C4 8.94692 6.48412 6.88598 8.92988 6.88598C10.2293 6.88598 11.3121 7.75436 12.1274 7.75436C12.9045 7.75436 14.1147 6.83402 15.5924 6.83402C16.3521 6.81407 17.105 6.98453 17.7848 7.33037C18.4645 7.67622 19.0503 8.18685 19.4905 8.81728ZM14.8918 5.18787C15.5431 4.40817 15.9119 3.42466 15.9364 2.40162C15.9375 2.26675 15.9246 2.13214 15.8981 2C14.7792 2.11122 13.7446 2.65386 13.0064 3.51662C12.3487 4.26525 11.9661 5.2225 11.9235 6.22569C11.924 6.34769 11.9368 6.46932 11.9618 6.58865C12.05 6.60562 12.1395 6.61431 12.2293 6.61463C12.745 6.57288 13.2469 6.42487 13.7046 6.1796C14.1623 5.93433 14.5662 5.59692 14.8918 5.18787Z" />{" "}
          {/* your logo path here */}
        </svg>

        <p className="mb-8 font-bold text-lg">Trade in. Upgrade. Save.</p>

        <h2>There’s never been a better time to upgrade.</h2>
        <h3>Here’s what you get with the new iPhone 17.</h3>

        <button onClick={onOpen} className="button flex items-center gap-3">
          Check if your device is eligible
          <span>
            <ChevronRight />
          </span>
        </button>
      </div>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>

          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
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
