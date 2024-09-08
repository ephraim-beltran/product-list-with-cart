import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext({});
CartProvider.propTypes = {
  children: PropTypes.node,
};

export function CartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  function increaseItem(item) {
    setShoppingCart((currCart) => {
      const itemInCart = currCart.find((cartItem) => cartItem.id == item.id);
      if (itemInCart == null) {
        return [...currCart, { ...item, quantity: 1 }];
      } else {
        return currCart.map((cartItem) => {
          if (cartItem.id == item.id)
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          return cartItem;
        });
      }
    });
  }

  function decreaseItem(item) {
    const index = shoppingCart.findIndex((cartItem) => cartItem.id === item.id);
    if (shoppingCart[index].quantity > 0) {
      setShoppingCart((currCart) =>
        currCart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else return cartItem;
        }),
      );
    }
  }

  function removeThis(item) {
    setShoppingCart((currCart) =>
      currCart.filter((cartItem) => {
        return cartItem.id !== item.id;
      }),
    );
  }

  function getQuantityOf(id) {
    return shoppingCart.find((cartItem) => cartItem.id === id)?.quantity || 0;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        increaseItem,
        decreaseItem,
        removeThis,
        getQuantityOf,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
