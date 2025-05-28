import styled from "./OrderConfirmation.module.css";
import orderConfirmed from "../../../../assets/images/icon-order-confirmed.svg";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { orderStatus } from "../CartList/cartSlice";
import { reset } from "../CartList/cartSlice";
import { Loader } from "../../../../components/Loader";

export function OrderConfirmation({ toggleModal }) {
  const status = useSelector(orderStatus);
  const dispatch = useDispatch();
  const order = status.info;
  const handleClick = (e) => {
    e.preventDefault();
    toggleModal();
    dispatch(reset());
  };

  const button = (
    <a className={styled.button} onClick={handleClick}>
      <div>Start New Order</div>
    </a>
  );
  return (
    <div className={styled.dialogue}>
      <section className={styled.content}>
        {status.pending && <Loader />}
        {status.rejected && (
          <>
            <p>Your order was not sent. There was an error.</p>
            {button}
          </>
        )}
        {status.sent && status.info && (
          <>
            <div className={styled.header}>
              <img src={orderConfirmed} />
              <h2>Order Confirmed</h2>
              <p>We hope you enjoy your food!</p>
            </div>
            <ul>
              {order.data.order.orderList.map((item, index) => {
                const subTotal = item.price * item.quantity;
                const assetUrl =
                  "https://data-placeholder.netlify.app/data/product-list-with-cart/";
                const thumbnail = `${assetUrl}${item.image.thumbnail}`;
                return (
                  <li key={index} className={styled.listItem}>
                    <img src={thumbnail} alt={item.name} />
                    <div className={styled.listInfo}>
                      <h3 className={styled.itemName}>{item.name}</h3>
                      <span className={styled.quantity}>{item.quantity}x</span>
                      <span className={styled.price}>
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                    <span className={styled.subtotal}>
                      {formatCurrency(subTotal)}
                    </span>
                  </li>
                );
              })}
              <li className={styled.total}>
                <span className={styled.totalLabel}>Order Total</span>
                <span className={styled.totalValue}>
                  {formatCurrency(order.data.order.total)}
                </span>
              </li>
            </ul>
            {button}
          </>
        )}
      </section>
    </div>
  );
}
