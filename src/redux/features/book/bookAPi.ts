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
    deleteBook: builder.mutation({
      query: ({id,email}) => ({
        method: "DELETE",
        url: `/books/${id}?email=${email}`,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: "/books",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetBookQuery, useGetSingleBookQuery, usePostBookMutation,useGetAllBookQuery,useDeleteBookMutation,useUpdateBookMutation } =
  bookAPi;
