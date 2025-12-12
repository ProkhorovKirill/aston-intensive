import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({

        getPosts: build.query({
            query: (params: DefaultQueryParams) => ({
                url: 'posts',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            })
        }),

        getPostById: build.query({
            query: (id: number) => ({
                url: `posts/${id}`,
            })
        }),

        getPostsByUserId: build.query({
            query: (id: number) => ({
                url: `users/${id}/posts`,
            })
        })

    })
})

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetPostsByUserIdQuery,
} = postsApi;