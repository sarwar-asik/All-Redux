import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const productApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000"
    }),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=>"/products"
        })
    })
})