import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";
import logger from "redux-logger";
import productSlice from "../feature/products/productSlice";
import { productApi } from "../feature/api/apiSlice";
const store = configureStore({
  reducer: {
    [productApi.reducerPath]:productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
    // products: productSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(productApi.middleware)

});

export default store;
