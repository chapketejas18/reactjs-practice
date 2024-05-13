import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
