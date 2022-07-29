import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Menu } from "./layout/Menu";
import { AddProductContainer } from "./screens/add-product/AddProductContainer";
import { EditProductContainer } from "./screens/edit-product/EditProductContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataLoader } from "./DataLoader";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Menu />
        <DataLoader>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add-product" element={<AddProductContainer />} />
            <Route path="/edit/:id" element={<EditProductContainer />} />
          </Routes>
        </DataLoader>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
