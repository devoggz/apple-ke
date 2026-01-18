import React from 'react'
import Image from "next/image";

const Hero = () => {
    return (
        <section  className="h-fit lg:h-[80vh] flex flex-col items-center  2xl:mt-[7vh] ">
            <div className="relative z-10 flex flex-col items-center lg:translate-y-22">
                <h1 className="font-semibold lg:text-5xl 2xl:text-5xl  mb-3 text-center">
                    Apple Centre Ke
                </h1>

                <p className="lg:text-xl lg:font-semibold text-base font-semibold  mb-6 text-center px-4">
                    Your Go-To for Apple Products in Kenya
                </p>
                <small className="max-w-xl text-center">
                    At Apple Center Ke, we deliver authentic Apple products with professional service and fast, reliable delivery across Kenya and East Africa.
                </small>

                <div className="flex items-center justify-center gap-4 mb-6 mt-6">
                    <button className="relative z-10 bg-blue-600 border-1 border-blue-600 text-white py-1.5 px-6 rounded-full  text-md cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out">
                        Shop
                    </button>
                    <button className="relative z-10  border-1 border-blue-600 text-primary py-1.5 px-6  rounded-full  text-md cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out">
                        Repairs
                    </button>
                </div>

                <Image
                    src="/iphone.png"
                    alt="iPhone Products"
                    className="container mx-auto "
                    width={400}
                    height={400}
                />
            </div>
        </section>
    )
}

export default Hero