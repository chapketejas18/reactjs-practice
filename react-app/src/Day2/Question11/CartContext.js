// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.findIndex(item => item.id === product.id);
    if (existingProduct !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProduct].quantity += 1; 
      setCart(updatedCart);
    } else {
      const updatedProduct = { ...product, quantity: 1 }; 
      setCart([...cart, updatedProduct]);
    }
  };

  const removeFromCart = (product) => {
    if (product.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      const updatedCart = cart.map(item =>
        item.id === product.id ? updatedProduct : item
      );
      setCart(updatedCart);
    }
  };
  

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartProvider, useCart, CartContext };
