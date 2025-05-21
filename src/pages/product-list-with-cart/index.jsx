import styled from "./ProductList.module.css";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { ProductGrid } from "./components/ProductGrid";
import { ShoppingCart } from "./components/ShoppingCart";
import { useModal } from "./hooks/useModal";
export const ProductList = () => {
  const { toggleModal, modal } = useModal();
  return (
    <div className={`${styled.container} ${styled.defaults}`}>
      <section className={styled.menu}>
        <h2>Desserts</h2>
        <ProductGrid />
      </section>
      <ShoppingCart toggleModal={toggleModal} />
      {modal && <OrderConfirmation toggleModal={toggleModal} />}
    </div>
  );
};
