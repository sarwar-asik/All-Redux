import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        const products = { ...action.payload, quantity: 1 };
        state.cart.push(products);
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      }
      // console.log("state:",state.cart,"action:>>",action);
    },
    removeFromCart: (state, action) => {
      if (action.payload.quantity > 1) {
        const products = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        state.cart.push(products);
      } else {
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        )
      }
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
