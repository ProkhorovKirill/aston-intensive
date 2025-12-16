import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/lib/baseURL/baseURL";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['todo'],
    endpoints: (build) => ({

        getTodos: build.query({
            query: (id: number) => ({
                url: `users/${id}/todos`,
            }),
            providesTags: (result) => {
                return result ? [
                    ...result.map(({id}: {id: string}) => 
                        ({type: 'todo', id}),
                        {type: 'todo', id: 'TODOS_LIST'}
                    )
                ] : 
                [{type: 'todo', id: 'TODOS_LIST'}]
            }
        }),

        addTodo: build.mutation({
            query: (newTodo) => ({
                url: 'todos',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: (result, error) => result && !error ? 
                                [{type: 'todo', id: 'TODOS_LIST'}] : []
        }),

    })
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
} = todosApi;