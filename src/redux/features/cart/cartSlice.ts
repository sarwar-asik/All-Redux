import { IProduct } from '@/types/globalTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: 0;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        console.log('the  product is exists ');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        existingProduct.quantity = existingProduct.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (prduct) => prduct._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        console.log('the  product is exists ');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        existingProduct.quantity = existingProduct.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (prduct) => prduct._id !== action.payload._id
        );
      }

      state.total -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
