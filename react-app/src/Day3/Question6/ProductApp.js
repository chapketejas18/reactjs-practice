import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import {ProductDetail} from "./ProductDetail";
import { createContext } from "react";
export const ProductContext = createContext();

export const ProductApp = () => {
  const products = [
    {
      id: 1,
      name: "Product A1",
      price: 3032,
      details: "This is Product A1",
    },
    {
      id: 2,
      name: "Product B1",
      price: 2928,
      details: "This is Product B1",
    },
  ];
  return (
    <ProductContext.Provider value={{ products }}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}