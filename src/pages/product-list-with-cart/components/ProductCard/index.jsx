import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import styled from "./ProductCard.module.css";
import { formatCurrency } from "../../utilities/formatCurrency.js";
import PropType from "prop-types";

export function ProductCard({ productData }) {
  const { increaseItem, decreaseItem, getQuantityOf } =
    useContext(ShoppingCartContext);

  const quantity = getQuantityOf(productData.id);

  function increaseProduct(e, product = productData) {
    e.preventDefault();
    increaseItem(product);
  }
  function decreaseProduct(e, product = productData) {
    e.preventDefault();
    decreaseItem(product);
  }
  return (
    <article className={styled["product-card"]}>
      <p>Image</p>
      {quantity === 0 || quantity == null ? (
        <button onClick={increaseProduct}>Add to Cart</button>
      ) : (
        <>
          <button onClick={decreaseProduct}>-</button>
          {quantity}
          <button onClick={increaseProduct}>+</button>
        </>
      )}
      <p>{productData.category}</p>
      <p>{productData.name}</p>
      <p>{formatCurrency(productData.price)}</p>
    </article>
  );
}

ProductCard.propTypes = {
  productData: PropType.object,
};
