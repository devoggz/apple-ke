"use client";

import React from "react";
import Image from "next/image";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
import DiagnosisForm from "@/components/forms/DiagnosisForm";

const Hero = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section>
      <div className="relative z-10 flex flex-col items-center lg:translate-y-24">
        <h1 className="text-dark-200 font-semibold text-3xl lg:text-6xl text-center max-w-3xl mx-auto">
          Your Go-To for Apple Products in Kenya
        </h1>

        <p>
          We deliver authentic Apple products with professional service and
          fast, reliable delivery across Kenya and East Africa.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6 mt-6">
          <button
            onClick={onOpen}
            className="relative z-10 bg-dark-300  border-dark-100 text-white py-1.5 px-6 rounded-full  text-md cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Shop
          </button>
          <Modal
            isOpen={isOpen}
            placement="top-center"
            onOpenChange={onOpenChange}
          >
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
          <button className="relative z-10  border-1 border-black text-black py-1.5 px-6  rounded-full  text-md cursor-pointer hover:bg-blue-600 hover:text-white hover:border-none transition-all duration-300 ease-in-out">
            Repairs
          </button>
        </div>

        <Image
          priority
          src="/iphone.png"
          alt="iPhone Products"
          className="container mx-auto"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default Hero;
