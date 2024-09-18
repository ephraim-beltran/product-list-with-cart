import { formatCurrency } from "../../utilities/formatCurrency.js";
import styled from "./CartList.module.css";
import PropTypes from "prop-types";

CartList.propTypes = {
  list: PropTypes.array.isRequired,
  removeFromList: PropTypes.func,
};
export function CartList({ list, removeFromList }) {
  const total = list.reduce(
    (subTotal, currentItem) =>
      subTotal + currentItem.price * currentItem.quantity,
    0,
  );
  const cart = list.map((item) => {
    const subTotal = item.price * item.quantity;
    return (
      <li key={item.id} className={styled.listItem}>
        <div className={styled.listInfo}>
          <h3 className={styled.itemName}>{item.name}</h3>
          <span className={styled.quantity}>{item.quantity}</span>
          <span className={styled.price}>{formatCurrency(item.price)}</span>
          <span className={styled.subtotal}>{formatCurrency(subTotal)}</span>
        </div>
        <button onClick={() => removeFromList(item)}>
          <i>Remove from list</i>
        </button>
      </li>
    );
  });

  return (
    <>
      {cart}
      <li className={styled.cartTotal}>
        <h3 className={styled.cartTotalLabel}>Order Total</h3>
        <span className={styled.total}>{formatCurrency(total)}</span>
      </li>
    </>
  );
}
