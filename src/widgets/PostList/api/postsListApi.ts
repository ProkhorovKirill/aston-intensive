import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsListApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'posts',
        }),
    }),
})

export const {useGetPostsQuery} = postsListApi;