import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IProducts {
  status:boolean,
  priceRange:number
}

const initialState: IProducts = {
    status:false,
    priceRange:150
}

const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    reducers:{
    toggleState:(state)=>{
        state.status = !state.status
    },
    setPriceRange:(state,action:PayloadAction<number>)=>{
        state.priceRange = action.payload
    }
    }
})

export const {toggleState,setPriceRange} = productSlice.actions

export default productSlice.reducer
