import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBook {
  _id?: string | any;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  quantity?: number;
}
interface ICart {
  books: IBook[];
  total: number;
}

const initialState: ICart = {
  books: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }

      //   state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      }

      //   state.total -= action.payload.price;
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );

      //   state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToWishlist, removeFromWishlist, removeOne } =
  cartSlice.actions;

export default cartSlice.reducer;
