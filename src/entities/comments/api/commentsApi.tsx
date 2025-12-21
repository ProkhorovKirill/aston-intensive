import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/shared/lib/baseURL/baseURL";
import type { ItemList } from "@/shared/ui/ItemList/ItemList";
import type { Comment } from "../model/types";

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

interface NewComment {
    title: string,
}

export const commentsApi = createApi({

    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Comment'],
    endpoints: (build) => ({

        getComments: build.query<ItemList<Comment>, DefaultQueryParams>({
            query: (params: DefaultQueryParams) => ({
                url: 'comments',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            }),
            providesTags: (result: ItemList<Comment> | undefined) => {
                return result ? [...result.map((comment: Comment) => 
                            ({type: 'Comment' as const, id: comment.id})), 
                            {type: 'Comment' as const, id: 'COMMENTS_LIST'}] 
                            : [{type: 'Comment' as const, id: 'COMMENTS_LIST'}]
            }
        }),

        addComment: build.mutation<ItemList<Comment>, NewComment>({
            query: (newCommentData: NewComment) => ({
                url: 'comment',
                method: 'POST',
                body: newCommentData,
            }),
            invalidatesTags: (result: ItemList<Comment> | undefined, error) => result && !error ? 
                                [{type: 'Comment' as const, id: 'COMMENTS_LIST'}] : []
        })

    })

})

export const {
    useGetCommentsQuery,
    useAddCommentMutation,
} = commentsApi;