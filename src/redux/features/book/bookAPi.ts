import { api } from "../../api/apiSLice"

const bookAPi = api.injectEndpoints({
    endpoints:(builder)=>({
        getBook:builder.query({
            query:()=>'/books'
        }),
        getSingleBook :builder.query({
            query:(id)=>(`/books/${id}`)
        }),
        postBook:builder.mutation({
            query:({data})=>({
                url:"/books",
                method:"POST",
                body:data
            })
        })
    })}
)


export const {useGetBookQuery,useGetSingleBookQuery,usePostBookMutation} = bookAPi

