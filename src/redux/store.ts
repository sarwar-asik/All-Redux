import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './features/cart/cartSlice';
import productReducers from './features/products/product.slice';
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    product: productReducers,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
