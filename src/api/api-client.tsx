import { Product } from "../store/productsSlice";
import { PartialProduct } from "../screens/add-product/AddProductContainer";

export const BASE_API_URL = "http://localhost:3000/";
const headers = {
  "Content-Type": "application/json",
};

interface getProductsParams {
  input: [{}];
}

interface createProductParams {
  input: PartialProduct;
}

interface editProductParams {
  input: PartialProduct;
}

interface deleteProductParams {
  input: number;
}

export const getProductsApi = (params: getProductsParams) => {
  const options = {
    method: "GET",
    headers,
    body: JSON.stringify(params.input),
  };

  return fetch(`${BASE_API_URL}/products/`, options).then((response) => {
    return response.json();
  });
};

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



export const deleteProductApi = (params: deleteProductParams) => {
  const options = {
    method: "DELETE",
    headers,
    body: JSON.stringify(params.input),
  };

  //как мне передать айди продукта в этот файл? хук юс парамс тут не работает, пропс я не могу передать

  return fetch(`${BASE_API_URL}/products/${params}`, options).then((response) => {
    return response.json();
  });
};
