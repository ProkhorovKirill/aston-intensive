import { configureStore } from "@reduxjs/toolkit";
// import { postsListApi } from "../../../widgets/PostList/api/postsListApi";
import { postsApi } from "../../../entities/posts/api/postsApi";

export const postsStore = configureStore({
    reducer: {
        // [postsListApi.reducerPath]: postsListApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})


export type RootState = ReturnType<typeof postsStore.getState>
export type AppDispatch = typeof postsStore.dispatch