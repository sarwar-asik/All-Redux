import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
