import styled from "./ProductList.module.css";
import { CartProvider } from "./context";
import { ProductGrid } from "./components/ProductGrid";
import { ShoppingCart } from "./components/ShoppingCart";
export const ProductList = () => {
  return (
    <CartProvider>
      <div className={`${styled.container} ${styled.defaults}`}>
        <section className={styled.menu}>
          <h2>Desserts</h2>
          <ProductGrid />
        </section>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
};
