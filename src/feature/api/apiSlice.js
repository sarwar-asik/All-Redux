import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) =>
      // "/products"
       ({
        url: "/products",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body:data
      }),
    }),
  }),
});
export const { useGetProductsQuery,useAddProductMutation } = productApi;
