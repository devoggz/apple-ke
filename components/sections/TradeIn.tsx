"use client"

import React from 'react'
import Image from "next/image";
import {Modal, ModalBody, ModalContent, useDisclosure} from "@heroui/react";
import DiagnosisForm from "@/components/forms/DiagnosisForm";
import TradeInForm from "@/components/forms/TradeInForm";

const TradeIn = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <section className="bg-gray ">
            <div className="px-4 flex flex-col space-y-6 items-center lg:translate-y-20 ">
                <h1 className="font-semibold max-w-xl lg:text-3xl 2xl:text-5xl mb-3 text-center">
                    Trade In
                    Trade in. Upgrade. Save.
                </h1>
                <p className="lg:text-xl lg:font-semibold text-base font-semibold text-center">
                    Trade in. Upgrade. Save.
                </p>


                <button onClick={onOpen} className="relative z-10 bg-black border-1 border-black text-white py-1.5 px-6 rounded-full  text-md cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                    Check Eligibility
                </button>
                <Modal isOpen={isOpen}  placement="top-center" onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody>
                                    <TradeInForm/>
                                </ModalBody>

                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
            <Image
                src="/tradein.jpg"
                alt="iPhone Products"
                className="container mx-auto"
                width={340}
                height={340}
            />
        </section>
    )
}
export default TradeIn
