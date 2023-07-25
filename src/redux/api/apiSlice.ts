// import { IProduct } from '@/types/globalTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://technet-server-sigma.vercel.app
// http://localhost:5000/

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://technet-server-sigma.vercel.app',
  }),
  tagTypes:['comments']
  ,
  endpoints:() =>({}),
});



// export const {
//   useGetProductsQuery,
//   useGetSingleProductQuery,
//   usePostCommentMutation,
//   useGetCommentQuery,
// } = api;
