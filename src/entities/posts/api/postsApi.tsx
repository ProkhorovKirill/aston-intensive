import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";
import { upsertPosts } from "../slice/postSlice";

interface DefaultQueryParams {
    _limit: number,
    _page: number,
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Post', 'UserPosts'],
    endpoints: (build) => ({

        getPosts: build.query({
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
            providesTags: (result) => {
                return result ? [...result.map(({id} : {id: string}) => 
                    ({ type: 'Post', id })), { type: 'Post', id: 'LIST'},]
                : [{type: 'Post', id: 'POSTS_LIST'}]
            }
        }),

        getPostById: build.query({
            query: (id: number) => ({
                url: `posts/${id}`,
            }),
            providesTags: (result, error, id) => result && !error ? 
                            [{type: 'Post', id}] : []
        }),

        getPostsByUserId: build.query({
            query: (id: number) => ({
                url: `users/${id}/posts`,
            }),
            providesTags: (result, error, id) => result && !error ? 
                            [{type: 'UserPosts', id}, 
                            {type: "Post", id: 'POSTS_LIST'}] : [],
        }),

        addPost: build.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: (result, error) => result && !error ? 
                            [{type: 'Post', id: 'POSTS_LIST'}] : []
        }),

        updatePost: build.mutation({
            query: ({id, updatedData}) => ({
                url: `posts/${id}`,
                method: 'PATCH',
                body: updatedData
            }),
            invalidatesTags: (result, error, id) => result && !error ? 
                            [{type: 'Post', id}, {type: 'Post', id: 'LIST'}] : 
                            [{type: 'Post', id: 'POSTS_LIST'}]
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