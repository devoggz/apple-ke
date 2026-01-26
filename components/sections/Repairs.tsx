"use client";

import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import DiagnosisForm from "@/components/forms/DiagnosisForm";
import { ChevronRight } from "lucide-react";

const Repairs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section id="repairs" className="translate-y-20 py-16 ">
      <div>
        <img src="/logo-dark.svg" alt="Apple logo" className="w-10" />

        <h1>Repairs</h1>
        <p>
          Cracked screens, battery issues, or any other problems—our certified
          technicians deliver fast, reliable fixes.
        </p>
        <button onClick={onOpen} className=" flex items-center gap-3">
          Talk to a Technician{" "}
        </button>
        <div className="px-4">
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

        {/*<img src="/iphone.png" alt="iphone" />*/}
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
