import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";
import logger from "redux-logger";
import productSlice from "../feature/products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
