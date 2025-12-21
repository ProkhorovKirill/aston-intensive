import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";
import { upsertPosts } from "../slice/postSlice";
import type { ItemList } from "../../../shared/ui/ItemList/ItemList";
import type { Post } from "../../post/model/types";

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

interface NewPost {
    title: string,
    body: string,
    id: number,
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Post', 'UserPosts'],
    endpoints: (build) => ({

        getPosts: build.query<ItemList<Post>, DefaultQueryParams>({
            query: (params: DefaultQueryParams) => ({
                url: 'posts',
                params: {
                    _limit: params._limit || 5,
                    _page: params._page || 1,
                }
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(upsertPosts(data));
                } catch (e: unknown) {
                    if (e instanceof Error) console.error(e.message);
                }
            },
            providesTags: (result: ItemList<Post> | undefined) => {
                return result ? [...result.map((post: Post) => 
                    ({ type: 'Post' as const, id: post.id })), { type: 'Post' as const, id: 'LIST'},]
                : [{type: 'Post' as const, id: 'POSTS_LIST'}]
            }
        }),

        getPostById: build.query<Post, number>({
            query: (id: number) => ({
                url: `posts/${id}`,
            }),
            providesTags: (result: Post | undefined, error, id: number) => result && !error ? 
                            [{type: 'Post' as const, id}] : []
        }),

        getPostsByUserId: build.query<ItemList<Post>, number>({
            query: (id: number) => ({
                url: `users/${id}/posts`,
            }),
            providesTags: (result: ItemList<Post> | undefined, error, id) => result && !error ? 
                            [{type: 'UserPosts', id}, 
                            {type: "Post", id: 'POSTS_LIST'}] : [],
        }),

        addPost: build.mutation<Post, NewPost>({
            query: (newPost: NewPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: (result, error) => result && !error ? 
                            [{type: 'Post', id: 'POSTS_LIST'}] : []
        }),

        updatePost: build.mutation<Post, NewPost>({
            query: (newPost: NewPost) => ({
                url: `posts/${newPost.id}`,
                method: 'PATCH',
                body: newPost
            }),
            invalidatesTags: (result, error, newPost) => result && !error ? 
                            [{type: 'Post' as const, id: newPost.id}, {type: 'Post' as const, id: 'LIST'}] : 
                            [{type: 'Post' as const, id: 'POSTS_LIST'}]
        })

    })
})

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetPostsByUserIdQuery,
    useAddPostMutation,
    useUpdatePostMutation,
} = postsApi;