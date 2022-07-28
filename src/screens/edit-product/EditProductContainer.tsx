import { editProductAction, Product } from "../../store/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { EditProduct } from "./EditProduct";
import { createProductApi } from "../../api/api-client";

export type PartialProduct = Pick<Product, "name" | "price" | "stock">;

export const EditProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const products = useAppSelector((state) => state.products.list);
  const editedProduct = products.find((product) => product.id === Number(params.id));

  const [productInfo, setProductInfo] = useState<PartialProduct>({
    name: "",
    price: "",
    stock: "",
  });

  const handleProductNameEdit = (name: string) => {
    setProductInfo({ ...productInfo, name });
  };

  const handleProductPriceEdit = (price: string) => {
    setProductInfo({ ...productInfo, price });
  };

  const handleProductStockEdit = (stock: string) => {
    setProductInfo({ ...productInfo, stock });
  };

  const handleProductEdit = () => {
    createProductApi({ input: productInfo }).then((productInfo) => {
      dispatch(editProductAction(productInfo));
    });
  };

  return (
    <EditProduct
      label={""}
      productName={productInfo.name}
      productPrice={productInfo.price}
      productStock={productInfo.stock}
      onProductNameChange={handleProductNameEdit}
      onProductPriceChange={handleProductPriceEdit}
      onProductStockChange={handleProductStockEdit}
      onSubmit={handleProductEdit}
    />
  );
};
