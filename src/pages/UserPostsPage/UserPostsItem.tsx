import { useGetUserPostsQuery } from "../../widgets/PostList/api/postsListApi";
import { useMemo } from "react";
import sharedStyles from '../../shared/ui/shared.module.css';
import type { UserPost } from "./model/interfaces";

export default function UserPostsItem ({id} : {id: number}) {

    const {data: userPost, isFetching, error, isLoading} = useGetUserPostsQuery(id);
    
    const userPostList = useMemo(() => {
        
        if (!userPost?.length) return null

        return (
            !isLoading && <div className={sharedStyles.itemsWrapper}>
                {userPost.map((userPost: UserPost) => (
                    <p key={userPost.id} className={sharedStyles.Item}>{userPost.title}</p>
                ))}
            </div>
        )

    }, [userPost, isLoading])

    return (

        <>

            {isFetching && !error && <h2 className={sharedStyles.centralTitle}>Загрузка</h2>}

            {error && <h2 className={sharedStyles.centralTitle}>Ошибка</h2>}

            {!isFetching && !error && userPostList}

        </>

    )

}