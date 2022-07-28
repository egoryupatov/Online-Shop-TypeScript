import { Product } from "../store/productsSlice";
import {PartialProduct} from "../screens/add-product/AddProductContainer";

export const BASE_API_URL = "http://localhost:3000/";
const headers = {
  "Content-Type": "application/json",
};

interface createProductParams {
  input: PartialProduct;
}

interface editProductParams {
  input: PartialProduct;
}

export const createProductApi = (params: createProductParams): Promise<Product> => {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(params.input),
  };

  return fetch(`${BASE_API_URL}/products/`, options).then((response) => {
    return response.json();
  });
};

export const editProductApi = (params: editProductParams): Promise<Product> => {
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(params.input),
  };

  return fetch(`${BASE_API_URL}/products/`, options).then((response) => {
    return response.json();
  });
};
