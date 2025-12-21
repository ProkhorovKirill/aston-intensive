import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/shared/lib/baseURL/baseURL";
import type { ItemList } from "@/shared/ui/ItemList/ItemList";
import type { Todo } from "../model/types";

interface NewTodo {
    title: string,
    body: string,
    id: number,
}

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['todo'],
    endpoints: (build) => ({

        getTodos: build.query<ItemList<Todo>, number>({
            query: (id: number) => ({
                url: `users/${id}/todos`,
            }),
            providesTags: (result: ItemList<Todo> | undefined) => {
                return result ? [
                    ...result.map((todo: Todo) => 
                        ({type: 'todo' as const, id: todo.id}),
                        {type: 'todo' as const, id: 'TODOS_LIST'}
                    )
                ] : 
                [{type: 'todo' as const, id: 'TODOS_LIST'}]
            }
        }),

        addTodo: build.mutation<Todo, NewTodo>({
            query: (newTodo: NewTodo) => ({
                url: 'todos',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: (result: Todo | undefined, error) => result && !error ? 
                                [{type: 'todo' as const, id: 'TODOS_LIST'}] : []
        }),

    })
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
} = todosApi;