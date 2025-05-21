import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { formatCurrency } from "../../utilities/formatCurrency.js";
import styled from "./CartList.module.css";
import PropTypes from "prop-types";
import { getTotal, removeItem, selectTotal } from "./cartSlice.js";

CartList.propTypes = {
  list: PropTypes.array.isRequired,
  removeFromList: PropTypes.func,
};
export function CartList({ list }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  });
  const total = useSelector(selectTotal);
  const order = { list, total };
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
        <button onClick={() => dispatch(removeItem(item))}>
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
