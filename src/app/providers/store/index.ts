import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/posts/api/postsApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";
import { albumsApi } from "../../../entities/albums/api/albumsApi";
import { todosApi } from "../../../entities/todos/api/todosApi";

export const postsStore = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        postsApi.middleware, 
        commentsApi.middleware,
        albumsApi.middleware,
        todosApi.middleware,
    ),
})


export type RootState = ReturnType<typeof postsStore.getState>
export type AppDispatch = typeof postsStore.dispatch