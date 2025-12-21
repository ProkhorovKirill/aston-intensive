import { NavLink, useParams } from "react-router-dom";
import todos from './lib/links';
import { useCallback, useMemo } from "react";
import TodosItem from "./TodosItem";
import type { TodosLinks } from "./lib/links";
import sharedStyles from '@/shared/ui/shared.module.css';

export default function TodosPage() {

    const params = useParams<{id: string}>();

    const todosList: TodosLinks[] = useMemo(() => {
        return todos
    }, [])

    const getNavLinkClassName: ({isActive}: {isActive: boolean}) => string = useCallback(
        ({ isActive }) => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    return (
        <>
            <div className={sharedStyles.linksWrapper}>
                {todosList.map((todo) => {
                    return <p key={todo.id}>
                                <NavLink to={todo.to} className={getNavLinkClassName}>
                                    {todo.text}
                                </NavLink>
                            </p>    
                })}
            </div>
            
            {!isNaN(Number(params.id)) && <TodosItem id={Number(params.id)}/>}
        </>
    )

}