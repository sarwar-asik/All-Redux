import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counterState{
  count:number
}

const initialState :counterState= {
   count: 0
   }

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
   
      
      state.count += action.payload
    },
  },
});

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer;
