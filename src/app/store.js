import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
