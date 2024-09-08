import styled from "./ProductList.module.css";
import { CartProvider } from "./context";
import { ProductGrid } from "./components/ProductGrid";
import { ShoppingCart } from "./components/ShoppingCart";
export const ProductList = () => {
  return (
    <section className={styled.container}>
      <CartProvider>
        <div>
          <h2>Desserts</h2>
          <ProductGrid />
        </div>
        <ShoppingCart />
      </CartProvider>
    </section>
  );
};
