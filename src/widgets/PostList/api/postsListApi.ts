import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsListApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query({
            query: (params: {_limit: number, _page: number}) => ({
                url: 'posts',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            }),
        }),
    }),
})

export const {useGetPostsQuery} = postsListApi;