import { NavLink, useParams } from "react-router-dom";
import userPosts from './lib/links';
import { useCallback, useMemo } from "react";
import sharedStyles from '../../shared/ui/shared.module.css';
import UserPostsItem from "./UserPostsItem";

export default function UserPostsPage() {

    const params = useParams();

    const UserPostsList = useMemo(() => {
        return userPosts
    }, [])

    const getNavLinkClassName = useCallback(
        ({ isActive }: { isActive: boolean }): string => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    return (
        <>
            <div className={sharedStyles.linksWrapper}>
                {UserPostsList.map((userPost) => {
                    return <p key={userPost.id}>
                                <NavLink to={userPost.to} className={getNavLinkClassName}>
                                    {userPost.text}
                                </NavLink>
                            </p>    
                })}
            </div>
            
            <UserPostsItem id={Number(params.id)}/>
        </>
    )

}