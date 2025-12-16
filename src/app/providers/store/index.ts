import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "../../../entities/posts/api/postsApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";
import { albumsApi } from "../../../entities/albums/api/albumsApi";
import { todosApi } from "../../../entities/todos/api/todosApi";
import { usersApi } from "../../../entities/user/api/usersApi";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        postsApi.middleware, 
        commentsApi.middleware,
        albumsApi.middleware,
        todosApi.middleware,
        usersApi.middleware,
    ),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch