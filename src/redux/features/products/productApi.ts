import { api } from '@/redux/api/apiSlice';
import { IProduct } from '@/types/globalTypes';

const productApi = api.injectEndpoints({
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
      invalidatesTags: ['comments'],
    }),
    getComment: builder.query<
      Partial<{ comments: string[] }>,
      string | undefined
    >({
      query: (id) => ({ url: `/comment/${id}` }),
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;
