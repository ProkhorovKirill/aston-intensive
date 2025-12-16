import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['album', 'userAlbum'],
    endpoints: (build) => ({

        getUserAlbums: build.query({
            query: (id: number) => ({
                url: `users/${id}/albums`,
            }),
            providesTags: (result) => {
                return result ? [
                    ...result.map(({id}: {id: string}) => 
                        ({type: 'userAlbum', id}),
                        {type: 'userAlbum', id: 'ALBUMS_LIST'}
                    )
                ] : 
                [{type: 'userAlbum', id: 'ALBUMS_LIST'}]
            }
        }),

        getPhotos: build.query({
            query: (id: number) => ({
                url: `albums/${id}/photos`,
                params: {
                    _limit: 10,
                    _page: 1,
                }
            }),
            providesTags: (result) => {
                return result ? [
                    ...result.map(({id}: {id: string}) => 
                    ({type: 'album', id}),
                    {type: 'album', id: 'ALBUMS_LIST'}
                    )
                ] : [{type: 'album', id: 'ALBUMS_LIST'}]
            }
        }),

        addAlbum: build.mutation({
            query: (newAlbumData) => ({
                url: 'albums',
                method: 'POST',
                body: newAlbumData,
            }),
            invalidatesTags: (result, error) => result && !error ? 
                                [{type: 'userAlbum', id: 'ALBUMS_LIST'}] : []
        }),

        addPhoto: build.mutation({
            query: (newPhoto) => ({
                url: 'albums',
                method: 'POST',
                body: newPhoto,
            }),
            invalidatesTags: (result, error) => result && !error ? 
                                [{type: 'album', id: 'ALBUMS_LIST'}] : []
        }),

    })
})

export const {
    useGetUserAlbumsQuery,
    useAddAlbumMutation,
    useGetPhotosQuery,
    useAddPhotoMutation,
} = albumsApi;