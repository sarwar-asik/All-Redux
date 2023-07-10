## RTK query

#### src>redux>api>apiSlice :::::

      import { IProduct } from "@/types/globalTypes"
      import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


                export const api = createApi({
                    reducerPath: 'api',
                    baseQuery: fetchBaseQuery({
                        baseUrl: 'http://localhost:5000/',
                    }),
                    tagTypes:['comments']
                    ,
                    endpoints:() =>({}),
                });

    export const {useGetProductsQuery} = api

### src > redux> products> productApi ( you can use it in endpoints of src>redux>api>apiSlice ) :::

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

        export const {useGetProductsQuery,useGetSingleProductQuery,
            usePostCommentMutation,
            useGetCommentQuery,
        } = productApi;

## important Info **\*** (in apiSlice )

      tagTypes:['comments']  /// for refresh before end points///
      providesTags:['comments']   /// for getting refresh data ///
       invalidatesTags:['comments']   /// refresh after post or update data ///

### src>app.ts (get data) :::

            const { data, isLoading, error } = useGetProductsQuery(undefined);

### src>components>productReview (for post and get) ::::

        const [postComment,{isLoading,isError,isSuccess}] = usePostCommentMutation()



        const {data:commentData} = useGetCommentQuery(id,{refetchOnMountOrArgChange:true,pollingInterval:2000})

        console.log("🚀 ~ file: ProductReview.tsx:35 ~ ProductReview ~ commentData:", commentData)


        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(inputValue);

        const option ={
            id:id,
            data:{comment:inputValue}
        }
        postComment(option)

        setInputValue('');

        };
