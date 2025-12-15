import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../shared/lib/baseURL/baseURL';

export const postsListApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({

        getTodos: build.query({
            query: (id: number) => ({
                url: `users/${id}/todos`,
            })
        }),


    }),
})

export const {
    useGetTodosQuery,
} = postsListApi;