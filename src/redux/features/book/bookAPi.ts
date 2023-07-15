import { api } from "../../api/apiSLice";

const bookAPi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
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
        body: data
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetBookQuery, useGetSingleBookQuery, usePostBookMutation } =
  bookAPi;
