import React from "react";
import { ProductTable } from "./_components/product-table";
import AddProductModal from "@/components/add-product-modal";

function AdminPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl my-10">Teknolojico Admin Page</h1>
      <ProductTable />

      {/* <AddProductModal /> */}
    </div>
  );
}

export default AdminPage;
