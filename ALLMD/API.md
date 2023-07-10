## RTK query


#### src>redux>api>apiSlice :::::

      import { IProduct } from "@/types/globalTypes"
      import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

            export const api = createApi({
                reducerPath:"api",
                baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
                endpoints:(builder)=>({
                    getProducts:builder.query({
                        query:()=>'/products'
                    })
                })
            })

    export const {useGetProductsQuery} = api

###  src>app.ts (get data) :::

            const { data, isLoading, error } = useGetProductsQuery(undefined);