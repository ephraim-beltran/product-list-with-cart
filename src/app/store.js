import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "../pages/product-list-with-cart/components/ProductGrid/productListSlice.js";
import cartSlice from "../pages/product-list-with-cart/components/CartList/cartSlice.js";
export default configureStore({
  reducer: { productList: productListSlice, cart: cartSlice },
});
