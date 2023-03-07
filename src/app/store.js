import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        filter:filterSlice
    }
})


export default store