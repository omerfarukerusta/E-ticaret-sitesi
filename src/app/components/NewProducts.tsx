import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
        img: "/iphone-15.jpg",
        title: "Telefon",
        desc: "Iphone 15 Siyah 128GB",
        rating: 5,
        price: "799.00",
    },
    {
        img: "/macbook-pro.jpg",
        title: "Bilgisayar",
        desc: "MacBook Pro 14 inç Uzay Grisi",
        rating: 4,
        price: "1599.00",
    },
    {
        img: "/galaxy-z-fold.jpg",
        title: "Telefon",
        desc: "Samsung Galaxy Z Fold 6 Siyah",
        rating: 5,
        price: "1899.00",
    },
    {
        img: "/oled-42-inc.jpg",
        title: "Televizyon",
        desc: "Samsung Class OLED TV 42 inç",
        rating: 4,
        price: "1149.00",
    },
    {
        img: "/huawei-laptop.jpg",
        title: "Bilgisayar",
        desc: "Huawei MateBook X Pro Core Ultra Premium Edition",
        rating: 5,
        price: "1749.00",
    },
    {
        img: "/lg-televizyon.jpg",
        title: "Televizyon",
        desc: "LG Class UHD Serisi 4K UHD TV 50 inç",
        rating: 3,
        price: "329.00",
    },
]

const NewProducts = () => {
    return <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Yeni Ürünler</h2>


            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">

                {productsData.map((item, index) => (
                    <ProductCard key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
}

export default NewProducts
