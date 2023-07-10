import { IProduct } from '@/types/globalTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://technet-server-sigma.vercel.app',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery ,useGetSingleProductQuery} = api;
