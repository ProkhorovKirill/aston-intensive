import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

export const commentsApi = createApi({

    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Comment'],
    endpoints: (build) => ({

        getComments: build.query({
            query: (params: DefaultQueryParams) => ({
                url: 'comments',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            }),
            providesTags: (result) => {
                return result ? [...result.map(({id}: {id: string}) => 
                            ({type: 'Comment', id})), 
                            {type: 'Comment', id: 'COMMENTS_LIST'}] 
                            : [{type: 'Comment', id: 'COMMENTS_LIST'}]
            }
        }),

        addComment: build.mutation({
            query: (newComment) => ({
                url: 'comment',
                method: 'POST',
                body: JSON.stringify(newComment),
            }),
            invalidatesTags: (result, error) => result && !error ? 
                                [{type: 'Comment', id: 'COMMENTS_LIST'}] : []
        })

    })

})

export const {
    useGetCommentsQuery,
    useAddCommentMutation,
} = commentsApi;