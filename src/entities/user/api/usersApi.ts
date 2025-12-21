import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/shared/lib/baseURL/baseURL";
import type { ItemList } from "@/shared/ui/ItemList/ItemList";
import type { User } from "../model/types";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['user'],
    endpoints: (build) => ({

        getUsers: build.query<ItemList<User>, void>({
            query: () => ({
                url: `users`,
            }),
            providesTags: (result: ItemList<User> | undefined) => {
                return result ? [
                    ...result.map((user: User) => 
                        ({type: 'user' as const, id: user.id}),
                        {type: 'user' as const, id: 'USER_LIST'}
                    )
                ] : 
                [{type: 'user', id: 'USER_LIST'}]
            }
        }),

    })
})

export const {
    useGetUsersQuery,
} = usersApi;