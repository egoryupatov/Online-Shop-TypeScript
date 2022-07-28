import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store';

export interface Product {
  name: string;
  price: string;
  stock: string;
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
    getProductsAction: (state, action: PayloadAction<[]>) => {
      state.list = action.payload;
    },
    addProductAction: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload);
    },
    removeProductAction: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
    editProductAction: (state, action: PayloadAction<Product>) => {
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

export const { getProductsAction, addProductAction, removeProductAction, editProductAction } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.list

export default productsSlice.reducer




