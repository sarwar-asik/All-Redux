import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './features/cart/cartSlice';
import productReducers from './features/products/product.slice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    product: productReducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
