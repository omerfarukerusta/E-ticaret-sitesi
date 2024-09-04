import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <div className="container pt-16 pb-16 grid-cols-2">
                <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
                <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                    <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                        <div className="text-center flex flex-col items-center gap-1">
                            <Image
                                className="rounded-full inline-block pt-1"
                                src="/ceo.jpg"
                                width={80}
                                height={80}
                                alt="dp"
                            />
                            <h2 className="text-gray-500 font-black text-20[20px]">Hakan Demir</h2>
                            <p>CEO & Teknolojico Kurucusu</p>
                            <Image
                                className="inline-block py-2"
                                src="/double-tirnak.png"
                                width={30}
                                height={30}
                                alt="quotes"
                            />
                            <p className="max-w-[200px] text-gray-500 pb-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat incidunt excepturi!
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-500 bg-cover h-[500px] rounded-2xl grid place-items-center">
                        <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                            <button className="bg-blackish text-white p-2 rounded-md">
                                %25 İNDİRİM
                            </button>
                            <h2 className="font-extrabold text-2xl text-[#272727]">
                                Yeni Nesil İşlemcili Laptoplar
                            </h2>
                            <p className="text-gray-500 text-[20px]">
                                $1000 BAŞLAYAN FİYATLARLA <b>Sipariş Ver</b>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Testimonials
