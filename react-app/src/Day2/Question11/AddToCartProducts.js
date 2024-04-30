import { CartProvider } from "./CartContext";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

export const AddToCartProducts = () => {
  return (
    <>
      <CartProvider>
        <Product id={1} name="Product 1" price={10} />
        <Product id={2} name="Product 2" price={20} />
        <Product id={3} name="Product 3" price={30} />
        <ShoppingCart />
      </CartProvider>
    </>
  );
};
