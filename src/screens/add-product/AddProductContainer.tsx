import { addProductAction, Product } from "../../store/productsSlice";
import { useAppDispatch } from "../../store/hooks";
import React, { useState } from "react";
import { AddProduct } from "./AddProduct";
import { createProductApi } from "../../api/api-client";

export type PartialProduct = Pick<Product, "name" | "price" | "stock">;

export const AddProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const [productInfo, setProductInfo] = useState<PartialProduct>({
    name: "",
    price: "0",
    stock: "0",
  });

  const handleProductNameChange = (name: string) => {
    setProductInfo({ ...productInfo, name });
  };

  const handleProductPriceChange = (price: string) => {
    setProductInfo({ ...productInfo, price });
  };

  const handleProductStockChange = (stock: string) => {
    setProductInfo({ ...productInfo, stock });
  };

  const handleAddingProduct = () => {
    createProductApi({input: productInfo }).then((productInfo) => {
      dispatch(addProductAction(productInfo));
    });
  };

  return (
    <AddProduct
      label={""}
      productName={productInfo.name}
      productPrice={productInfo.price}
      productStock={productInfo.stock}
      onProductNameChange={handleProductNameChange}
      onProductPriceChange={handleProductPriceChange}
      onProductStockChange={handleProductStockChange}
      onSubmit={handleAddingProduct}
    />
  );
};
