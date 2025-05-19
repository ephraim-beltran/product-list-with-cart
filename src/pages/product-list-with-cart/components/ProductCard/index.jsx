import styled from "./ProductCard.module.css";
import { formatCurrency } from "../../utilities/formatCurrency.js";
import PropType from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemAmount,
  increaseItemAmount,
  selectCartItems,
  removeItem,
} from "../CartList/cartSlice.js";

export function ProductCard({ productData }) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const { quantity } = cart.find((item) => item.id == productData.id) || {
    quantity: 0,
  };

  function addProduct(e, product = productData) {
    e.preventDefault();
    dispatch(addItem(product));
  }
  function increaseProduct(e, product = productData) {
    e.preventDefault();
    dispatch(increaseItemAmount(product));
  }
  function decreaseProduct(e, product = productData) {
    e.preventDefault();
    if (quantity == 1) dispatch(removeItem(product));
    else dispatch(decreaseItemAmount(product));
  }
  return (
    <dl className={styled["product-card"]}>
      <div className={styled.menuImage}>
        <picture className={styled.picture}>
          <source srcSet={productData.image.mobile} media="(max-width:600px)" />
          <source srcSet={productData.image.tablet} media="(max-width:991px)" />
          <img src={productData.image.desktop} className={styled.image} />
        </picture>
        {quantity === 0 || quantity == null ? (
          <button className={styled.button} onClick={addProduct}>
            <i className={styled.addToCart}>Add to Cart</i>
          </button>
        ) : (
          <fieldset className={`${styled.button} ${styled.buttonRange}`}>
            <button onClick={decreaseProduct}>
              <i className={styled.decreaseButton}>-</i>
            </button>
            {quantity}
            <button onClick={increaseProduct}>
              <i className={styled.increaseButton}>+</i>
            </button>
          </fieldset>
        )}
      </div>
      <dd className={styled.category}>{productData.category}</dd>
      <dt className={styled.productName}>{productData.name}</dt>
      <dd className={styled.price}>{formatCurrency(productData.price)}</dd>
    </dl>
  );
}

ProductCard.propTypes = {
  productData: PropType.object,
};
