import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import PropType from "prop-types";
export function ShoppingCart() {
  const { shoppingCart, removeThis } = useContext(ShoppingCartContext);
  const cart = shoppingCart.map((item) => {
    function handleClick(e, product = item) {
      removeThis(product);
    }
    return (
      <div key={item.id}>
        <span>{item.name}</span>
        <p>Quantity: {item.quantity}</p>
        <button onClick={handleClick}>X</button>
      </div>
    );
  });
  return <section>{cart}</section>;
}

ShoppingCart.propTypes = {
  cartList: PropType.array,
};
