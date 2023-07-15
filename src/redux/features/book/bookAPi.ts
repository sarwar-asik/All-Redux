import { api } from "../../api/apiSLice";

const bookAPi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postBook: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/books",
        body: data
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBookQuery, useGetSingleBookQuery, usePostBookMutation } =
  bookAPi;
