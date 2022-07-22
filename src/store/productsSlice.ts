import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store';

export interface Product {
  name: string;
  price: number;
  stock: number;
  id: number;
}

interface ProductsState {
  list: Product[];
}

const initialState: ProductsState = {
  list: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<[]>) => {
      state.list = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      state.list = state.list.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
  },
});

export const { getProducts, addProduct, removeProduct, editProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.list

export default productsSlice.reducer




