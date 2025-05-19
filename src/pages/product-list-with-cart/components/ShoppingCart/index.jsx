import { useSelector } from "react-redux";
import emptyCart from "../../../../assets/images/illustration-empty-cart.svg";
import { CartList } from "../CartList";
import styled from "./ShoppingCart.module.css";
import PropType from "prop-types";
import { selectCartItems } from "../CartList/cartSlice";

export function ShoppingCart() {
  const shoppingCart = useSelector(selectCartItems);
  return (
    <section className={styled.shoppingCart}>
      <h2>Your Cart ({shoppingCart.length})</h2>
      {shoppingCart.length === 0 ? (
        <div className={styled.emptyContent}>
          <img src={emptyCart} className={styled.emptyCartImage} />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul>
            <CartList list={shoppingCart} />
          </ul>
          <aside className={styled.aside}>
            <i role="presentation"></i>
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </aside>
          <button className={styled.submit}>Confirm Order</button>
        </>
      )}
    </section>
  );
}

ShoppingCart.propTypes = {
  cartList: PropType.array,
};
