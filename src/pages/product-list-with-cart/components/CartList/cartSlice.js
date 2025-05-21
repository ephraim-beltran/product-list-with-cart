import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendOrder } from "../../../../api/sendOrder";

export const postOrder = createAsyncThunk("postOrder", async (order) => {
  const serverResponse = await sendOrder(order);
  console.info(serverResponse);
  return serverResponse;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    orderSent: false,
    orderPending: false,
    orderRejected: false,
    orderInfo: {},
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
    reset: (state) => {
      state.cart = [];
      state.total = 0;
      state.orderSent = false;
      state.orderPending = false;
      state.orderRejected = false;
      state.orderInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.fulfilled, (state, action) => {
        state.orderSent = true;
        state.orderPending = false;
        state.orderRejected = false;
        state.orderInfo = action.payload;
      })
      .addCase(postOrder.pending, (state) => {
        state.orderPending = true;
      })
      .addCase(postOrder.rejected, (state) => {
        state.orderSent = false;
        state.orderPending = false;
        state.orderRejected = true;
      });
  },
});

export const {
  addItem,
  increaseItemAmount,
  decreaseItemAmount,
  removeItem,
  getTotal,
  reset,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export const orderStatus = (state) => ({
  sent: state.cart.orderSent,
  pending: state.cart.orderPending,
  rejected: state.cart.orderRejected,
  info: state.cart.orderInfo,
});
export default cartSlice.reducer;
