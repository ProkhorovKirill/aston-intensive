import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

export const postsListApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (params: DefaultQueryParams) => ({
                url: 'posts',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            }),
        }),
        getComments: build.query({
            query: (params: DefaultQueryParams) => ({
                url: 'comments',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            })
        })
    }),
})

export const {useGetPostsQuery, useGetCommentsQuery} = postsListApi;