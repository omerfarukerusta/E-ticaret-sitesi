"use client";

import React from "react";
import ProductTable from "./_components/product-table";
import AddProduct from "./_components/add-product";
import AddProductGroup from "./_components/add-category";
import AddBrand from "./_components/add-brand";

function AdminPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl my-10">Teknolojico Admin Page</h1>

      <div className="flex flex-row gap-5">
        <AddProduct />
        <AddProductGroup />
        <AddBrand />
      </div>

      <ProductTable />

      {/* <AddProductModal /> */}
    </div>
  );
}

export default AdminPage;
