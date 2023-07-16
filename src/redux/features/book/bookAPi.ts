import { api } from "../../api/apiSLice";

const bookAPi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => "/books/book",
      providesTags: ["book"],
    }),
    getAllBook: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postBook: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/books",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ data, id }) => ({
        method: "PUT",
        url: `/books/${id}`,
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: ({ id, email }) => ({
        method: "DELETE",
        url: `/books/${id}?email=${email}`,
      }),
      invalidatesTags: ["book"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/Review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReview: builder.query({
      query: (id) => ({ url: `/books/Review/${id}` }),
      providesTags: ["Reviews"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  useGetAllBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetReviewQuery,
  usePostReviewMutation,
} = bookAPi;
