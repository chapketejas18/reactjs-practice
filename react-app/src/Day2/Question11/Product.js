import React from "react";
import { useCart } from "./CartContext";

const Product = ({ id, name, price }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
