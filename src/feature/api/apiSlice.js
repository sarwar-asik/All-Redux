import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Products", "users"],
  // added tag for refresh
  endpoints: (builder) => ({
    // get products
    getProducts: builder.query({
      query: (id) =>
        // "/products"
        ({
          url: "/products",
        }),
      providesTags: ["Products"],
    }),
    // add Products
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      //  invalidatesTags:["Products"]  ////
      //  I used already  refetchOnMountOrArgChange:true in Home.js
    }),
    // remove Products ///
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productApi;
