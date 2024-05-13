import React, { createContext, useState } from "react";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const initialProducts = [
    { id: 1, name: "Product 1", price: 10, details: "Details of Product 1" },
    { id: 2, name: "Product 2", price: 20, details: "Details of Product 2" },
    { id: 3, name: "Product 3", price: 30, details: "Details of Product 3" },
  ];
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
