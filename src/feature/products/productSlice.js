import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProducts, fetchProducts, postProducts } from "./productAPI";

const initialState = {
  products: [{}],
  isLoading: false,
  isError: false,
  error: "",
  postSuccess: false,
  deleteSuccess:false
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = fetchProducts();
    return products;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    const products = postProducts(data);
    return products;
  }
);

export const removeProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const products = deleteProducts(id);
    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    togglePostSuccess: (state) => {
      state.postSuccess = false;
    },
    toggleDeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.isError = false;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.postSuccess = true;
        state.isLoading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.postSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
        state.deleteSuccess = false;
        state.isError = false;
      })
      .addCase(removeProduct.fulfilled, (state) => {
        state.deleteSuccess = true;
        state.isLoading = false;
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.deleteSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const {togglePostSuccess,toggleDeleteSuccess} =productSlice.actions
export default productSlice.reducer;
