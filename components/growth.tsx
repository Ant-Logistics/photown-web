

import Image from 'next/image'
import React from 'react'

export default function Growth() {
    return (
        <>
            <section className="bg-white py-16">
                <div className="container w-full max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center lg:flex-row">
                    {/* Create Two Div 50 50  */}
                    <div className="lg:w-[50%] w-full py-4 flex gap-4 flex-wrap flex-col">
                        <div className="flex gap-4">
                            <div className="w-40 bg-blue-200 rounded-lg shadow-md py-4">
                                <div className="flex flex-col justify-center items-center">
                                    <Image src="/assets/images/city-town.svg"
                                        alt="Smart Fulfillment"
                                        width={40}
                                        height={40}
                                        className="mx-auto mb-1" />
                                    <div className="text-[80px] py-2 leading-[82px] font-extrabold text-[#0867bb]">2</div>
                                    <p className="text-base text-black">Cities Presence</p>
                                </div>
                            </div>
                            <div className="w-40 bg-blue-200 rounded-lg shadow-md py-4">
                                <div className="flex flex-col justify-center items-center">
                                    <Image src="/assets/images/warehouse.svg"
                                        alt="Smart Fulfillment"
                                        width={40}
                                        height={40}
                                        className="mx-auto mb-1" />
                                    <div className="text-[80px] py-2 leading-[82px] font-extrabold text-[#0867bb]">10</div>
                                    <p className="text-base text-black">Hubs</p>
                                </div>
                            </div>
                        </div>

                        <div className="font-bold text-[40px] text-left">
                            And growing <br /> <span className="text-brand-blue"> FAST </span>
                        </div>

                        <div className="flex items-left gap-4">
                            <button className="bg-black md:block text-white px-15 py-2 rounded-lg hover:bg-blue-900 transition duration-300">
                                Contact Us
                            </button>
                        </div>


                    </div>
                    {/* Text Section */}
                    <div className="lg:w-[60%] w-full p-4">
                        {/* Image */}
                        <Image
                            src="/assets/images/growth.svg"
                            alt="Smart Fulfillment"
                            width={200}
                            height={300}
                            className="w-full h-auto mx-auto mb-4"
                        />
                    </div>               
                    
                </div>
                
            </section>
        </>
    )
}
