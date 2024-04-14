// ShoppingCart.js
import React from 'react';
import { useCart } from './CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart, calculateTotalPrice } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price} - Quantity : {item.quantity} - Total Price of Item : ${item.quantity*item.price}</p> 
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h3>Total Price: ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default ShoppingCart;
