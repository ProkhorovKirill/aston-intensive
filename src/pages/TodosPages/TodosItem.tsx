import { useGetTodosQuery } from "@/entities/todos/api/todosApi";
import { useMemo, type JSX } from "react";
import sharedStyles from '@/shared/ui/shared.module.css';
import type { Todo } from "@/entities/todos/model/types";

export default function TodosItem ({id} : {id: number}) {

    const {data: todos, isFetching, error, isLoading} = useGetTodosQuery(id);
    
    const todosList: JSX.Element | null = useMemo(() => {
        
        if (!todos?.length) return null

        return (
            !isLoading && <div className={sharedStyles.itemsWrapper}>
                {todos.map((todo: Todo) => (
                    <p key={todo.id} className={sharedStyles.Item}>{todo.title}</p>
                ))}
            </div>
        )

    }, [todos, isLoading])

    return (

        <>

            {isFetching && !error && <h2 className={sharedStyles.centralTitle}>Загрузка</h2>}

            {error && <h2 className={sharedStyles.centralTitle}>Ошибка</h2>}

            {!isFetching && !error && todosList}

        </>

    )

}