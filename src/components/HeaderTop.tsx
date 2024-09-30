import React from 'react'
import { brotliDecompress } from 'zlib'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <FaFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaTwitter />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaLinkedin />
                        </div>
                    </div>


                    <div className="text-gray-500 text-[12px]">
                        SAAT 15:00 E KADAR SİPARİŞ VER <b>AYNI GÜN KAPINDA</b>
                    </div>

                    <div className="flex gap-4">
                        <select
                            className="text-gray-500 text-[12px] w-[70px]"
                            name="currency"
                            id="currency"
                        >
                            <option value="USD $">USD $</option>
                            <option value="EUR €">EUR €</option>
                            <option value="TL ₺">TL ₺</option>
                        </select>

                        <select
                            className="text-gray-500 text-[12px] w-[80px]"
                            name="language"
                            id="language"
                        >
                            <option value="Turkish">Turkish</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
