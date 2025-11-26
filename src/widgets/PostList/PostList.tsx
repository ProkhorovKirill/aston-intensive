import { useGetPostsQuery } from './api/postsListApi'
import type { UseGetPostsQueryResult } from './model/interfaces'
import type { Post } from '../../entities/post/model/interfaces';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './postList.module.css'
import sharedStyles from '../../shared/ui/shared.module.css'
import React from 'react';
import WithLoading from '../../shared/lib/hoc/withLoading';

function PostList({posts, error} : {posts: Post[], error: any}) {

    return (
        <>

            {error && <h2 className={sharedStyles.centralTitle}>Произошла ошибка! Попробуйте позже.</h2>}
            
            {posts && <div className={styles.postList}>
                {posts.map((post: Post) => {
                    return  <React.Fragment key={post.id}>
                                <PostCard postInfo={post}/>
                            </React.Fragment>
                })}
            </div>}

        </>
    )

}

const PostListWithLoading = WithLoading(PostList);

export default function PostListContainer() {

    const {data: posts, error, isLoading}: UseGetPostsQueryResult = useGetPostsQuery({_limit: 5, _page: 1});
    
    return (

        <PostListWithLoading 
            isLoading={isLoading}
            className={sharedStyles.centralTitle}
            posts={posts}
            error={error}
        />

    );

}