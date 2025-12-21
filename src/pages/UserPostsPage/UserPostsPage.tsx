import { NavLink, useParams } from "react-router-dom";
import userPosts from './lib/links';
import { useCallback, useMemo } from "react";
import type { UserPostsLinks } from "./lib/links";
import UserPostsItem from "./UserPostsItem";
import sharedStyles from '@/shared/ui/shared.module.css';

export default function UserPostsPage() {

    const params = useParams<{id: string}>();

    const UserPostsList: UserPostsLinks[] = useMemo(() => {
        return userPosts
    }, [])

    const getNavLinkClassName = useCallback(
        ({ isActive }: { isActive: boolean }): string => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    return (
        <>
            <div className={sharedStyles.linksWrapper}>
                {UserPostsList.map((userPost: UserPostsLinks) => {
                    return <p key={userPost.id}>
                                <NavLink to={userPost.to} className={getNavLinkClassName}>
                                    {userPost.text}
                                </NavLink>
                            </p>    
                })}
            </div>
            
            {!isNaN(Number(params.id)) && <UserPostsItem id={Number(params.id)}/>}
        </>
    )

}