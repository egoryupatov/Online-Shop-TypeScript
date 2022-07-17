import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Menu } from "./layout/Menu";
import { AddProduct } from "./features/AddProduct";
import { EditProduct } from "./features/EditProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product:id" element={<EditProduct />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
