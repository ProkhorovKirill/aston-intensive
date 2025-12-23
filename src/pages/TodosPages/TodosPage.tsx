import { NavLink, useParams } from "react-router-dom";
import todos from './lib/links';
import { useCallback, useMemo } from "react";
import sharedStyles from '../../shared/ui/shared.module.css';
import TodosItem from "./TodosItem";

export default function TodosPage() {

    const params = useParams();

    const id: number = Number(params.id) || 1;

    const todosList = useMemo(() => {
        return todos
    }, [])

    const getNavLinkClassName = useCallback(
        ({ isActive }: { isActive: boolean }): string => 
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
            
            <TodosItem id={id}/>
        </>
    )

}