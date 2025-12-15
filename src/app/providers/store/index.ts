import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/posts/api/postsApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";

export const postsStore = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        postsApi.middleware, 
        commentsApi.middleware,
    ),
})


export type RootState = ReturnType<typeof postsStore.getState>
export type AppDispatch = typeof postsStore.dispatch