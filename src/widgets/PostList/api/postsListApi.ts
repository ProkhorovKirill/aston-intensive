import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../shared/lib/baseURL/baseURL';

export const postsListApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({

        getAlbums: build.query({
            query: (id: number) => ({
                url: `users/${id}/albums`,
            })
        }),

        getTodos: build.query({
            query: (id: number) => ({
                url: `users/${id}/todos`,
            })
        }),

        getPhotos: build.query({
            query: (id: number) => ({
                url: `albums/${id}/photos`,
                params: {
                    _limit: 10,
                    _page: 1,
                }
            })
        }),

    }),
})

export const {
    useGetAlbumsQuery,
    useGetTodosQuery,
    useGetPhotosQuery,
} = postsListApi;