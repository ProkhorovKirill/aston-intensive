import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";
import type { ItemList } from "../../../shared/ui/ItemList/ItemList";
import type { Album } from "../model/types";
import type { Photo } from "../../photo/model/types";

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['album', 'userAlbum'],
    endpoints: (build) => ({

        getUserAlbums: build.query<ItemList<Album>, number>({
            query: (id: number) => ({
                url: `users/${id}/albums`,
            }),
            providesTags: (result: ItemList<Album> | undefined) => {
                return result ? [
                    ...result.map((album: Album) => 
                        ({type: 'userAlbum' as const, id: album.id}),
                        {type: 'userAlbum' as const, id: 'ALBUMS_LIST'}
                    )
                ] : 
                [{type: 'userAlbum' as const, id: 'ALBUMS_LIST'}]
            }
        }),

        getPhotos: build.query<ItemList<Photo>, number>({
            query: (id: number) => ({
                url: `albums/${id}/photos`,
                params: {
                    _limit: 10,
                    _page: 1,
                }
            }),
            providesTags: (result: ItemList<Photo> | undefined) => {
                return result ? [
                    ...result.map((photo: Photo) => 
                    ({type: 'album' as const, id: photo.id}),
                    {type: 'album' as const, id: 'ALBUMS_LIST'}
                    )
                ] : [{type: 'album' as const, id: 'ALBUMS_LIST'}]
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