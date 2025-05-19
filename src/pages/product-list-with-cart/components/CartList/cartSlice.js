import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push({
        ...action.payload,
        quantity: 1,
      });
    },
    increaseItemAmount: (state, action) => {
      const item = state.cart.find((item) => item.id == action.payload.id);
      item.quantity++;
    },
    decreaseItemAmount: (state, action) => {
      const item = state.cart.find((item) => item.id == action.payload.id);
      item.quantity--;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    getTotal: (state) => {
      const subtotal = state.cart.map((item) => item.quantity * item.price);
      state.total = subtotal.reduce((a, b) => a + b);
    },
  },
});

export const {
  addItem,
  increaseItemAmount,
  decreaseItemAmount,
  removeItem,
  getTotal,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export default cartSlice.reducer;
