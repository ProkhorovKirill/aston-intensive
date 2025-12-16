import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../../post/model/interfaces';

const postsAdapter = createEntityAdapter({
    selectId: (post: Post) => post.id,
    sortComparer: (a, b) => a.id - b.id,
});

const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

        upsertPosts: (state, action: PayloadAction<Post[]>) => 
            postsAdapter.upsertMany(state, action.payload),

        upsertPost: (state, action: PayloadAction<Post>) => 
            postsAdapter.upsertOne(state, action.payload),
        
        removeAllPosts: (state) => postsAdapter.removeAll(state),

    },
});

export const { upsertPosts, upsertPost, removeAllPosts } = postSlice.actions;
export const postsSelectors = postsAdapter.getSelectors((state: any) => state.post);
export default postSlice.reducer;