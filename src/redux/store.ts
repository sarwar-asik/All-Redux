import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './features/cart/cartSlice';
import productReducers from './features/products/product.slice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    product:productReducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
