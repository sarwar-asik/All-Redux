import { api } from "../../api/apiSLice"

const bookAPi = api.injectEndpoints({
    endpoints:(builder)=>({
        getBook:builder.query({
            query:()=>'/books'
        })
    })}
)


export const {useGetBookQuery} = bookAPi

