import { IProduct } from '@/types/globalTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes:['comments']
  ,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query<IProduct, string | undefined>({
      query: (id) => ({ url: `/product/${id}` }),
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags:['comments']

    }),
    getComment: builder.query<Partial<{comments:string[]}>, string | undefined>({
      query: (id) => ({ url: `/comment/${id}` }),
      providesTags:['comments']
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
