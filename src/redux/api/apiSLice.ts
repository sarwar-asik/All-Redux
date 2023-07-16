
import  {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import main_api from "../../shared/mainAPi"

export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:main_api
    }),
    tagTypes:['book','Reviews']
    ,
    endpoints:()=>({})
})