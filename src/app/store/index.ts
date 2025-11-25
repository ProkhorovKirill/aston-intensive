import { configureStore } from "@reduxjs/toolkit";
import { postsListApi } from "../../widgets/PostList/api/postsListApi";

export const postsStore = configureStore({
    reducer: {
        [postsListApi.reducerPath]: postsListApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsListApi.middleware),
})


export type RootState = ReturnType<typeof postsStore.getState>
export type AppDispatch = typeof postsStore.dispatch