"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getData } from "@/lib/api";

type Product = {
  id: number;
  brandId: number;
  typeId: number;
  description: string;
  available: boolean;
  image: string;
  price: number;
};

type ApiResponse = {
  code: string;
  message: string;
  responseData: Product[];
};

const NewProducts = () => {
  const [products, setProducts] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:5269/api/EticaretApi/GetProducts"; // URL string olarak belirtilmeli

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(); // Backtick içinde yazım hatası düzeltildi
        }

        const data: ApiResponse = await response.json(); // JSON yanıtı ApiResponse tipine dönüştürüldü
        setProducts(data);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Yeni Ürünler</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {products?.responseData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.image}
              title={item.description}
              desc={item.description}
              rating={5}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
