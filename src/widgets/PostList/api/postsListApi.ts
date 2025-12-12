import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../shared/lib/baseURL/baseURL';

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

export const postsListApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({

        getComments: build.query({
            query: (params: DefaultQueryParams) => ({
                url: 'comments',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            })
        }),

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
    useGetCommentsQuery,
    useGetAlbumsQuery,
    useGetTodosQuery,
    useGetPhotosQuery,
} = postsListApi;