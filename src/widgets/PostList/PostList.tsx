import { useGetPostsQuery } from './api/postsListApi'
import type { UseGetPostsQueryResult } from './model/interfaces'
import type { Post } from '../../entities/post/model/interfaces';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './postList.module.css'
import sharedStyles from '../../shared/ui/shared.module.css'
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import WithLoading from '../../shared/lib/hoc/withLoading';
import useFilterByLength from '../../shared/lib/filterByLength/useFilterByLength';

function PostList({posts, error} : {posts: Post[], error: any}) {

    return (
        <>

            {error && <h2 className={sharedStyles.centralTitle}>Произошла ошибка! Попробуйте позже.</h2>}
            
            {posts && 
            <div className={styles.postList}>
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

    let {data: posts, error, isLoading}: UseGetPostsQueryResult = useGetPostsQuery({_limit: 5, _page: 1});
    
    const [postList, setPostList] = useState(posts);

    const {debouncedSymbolCount, filterPostsByLength} = useFilterByLength();

    const filteredPosts = useMemo(() => {

        if (debouncedSymbolCount && !isLoading && posts) {

            return filterPostsByLength(posts, debouncedSymbolCount || 1000);

        }

        return posts;

    }, [debouncedSymbolCount, isLoading, posts, filterPostsByLength]);

    const updatePostList = useCallback((newPosts: Post[] | undefined) => {

        setPostList(newPosts);

    }, []);

    useEffect(() => {

        if (debouncedSymbolCount && !isLoading) {
            updatePostList(filteredPosts);
        } else if (!isLoading) {
            updatePostList(posts);
        }

    }, [debouncedSymbolCount, isLoading, filteredPosts, posts, updatePostList])

    const postListProps = useMemo(() => ({

        isLoading,
        className: sharedStyles.centralTitle,
        posts: postList,
        error

    }), [isLoading, postList, error]);

    return (

        <>

            <PostListWithLoading {...postListProps} />

        </>

    );

}