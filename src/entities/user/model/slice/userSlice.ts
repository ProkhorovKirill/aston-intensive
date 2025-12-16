import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../../../pages/UsersPage/model/interfaces';

const usersAdapter = createEntityAdapter({
    selectId: (user: User) => user.id,
    sortComparer: (user1, user2) => user1.id - user2.id,
});

const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

        upsertUsers: (state, action: PayloadAction<User[]>) => 
            usersAdapter.upsertMany(state, action.payload),
        
        removeAllUsers: (state) => usersAdapter.removeAll(state),

    },
});

export const { upsertUsers, removeAllUsers } = userSlice.actions;
export const postsSelectors = usersAdapter.getSelectors((state: any) => state.user);
export default userSlice.reducer;