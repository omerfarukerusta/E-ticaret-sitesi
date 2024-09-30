"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "En çok satılan telefon",
            mainTitle: "IPHONE 16",
            price: "$799 ile $1099 arası seçenekler",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "En çok satılan laptop",
            mainTitle: "SON NESİL İŞLEMCİLİ LAPTOP",
            price: "$1000",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "En çok satılan televizyon",
            mainTitle: "4K SAMSUNG TELEVİZYON",
            price: "$2000",
        },
    ];

    return <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price} />
                ))}
            </Slider>
        </div>
    </div>
};

export default Hero
