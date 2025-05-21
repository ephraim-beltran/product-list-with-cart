import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchList } from "../../../../api/getList.js";

const getList = createAsyncThunk("getList", async () => {
  const data = await fetchList();
  return data;
});
const productListSlice = createSlice({
  name: "productList",
  initialState: {
    productList: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getList.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectProductList = (state) => state.productList.productList;
export const productListIsLoading = (state) => state.productList.isLoading;
export const productListHasError = (state) => state.productList.hasError;
export const loadList = getList;
export default productListSlice.reducer;
