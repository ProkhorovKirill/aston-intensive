import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['user'],
    endpoints: (build) => ({

        getUsers: build.query({
            query: () => ({
                url: `users`,
            }),
            providesTags: (result) => {
                return result ? [
                    ...result.map(({id}: {id: string}) => 
                        ({type: 'user', id}),
                        {type: 'user', id: 'USER_LIST'}
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