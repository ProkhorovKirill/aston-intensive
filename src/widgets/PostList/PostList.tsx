import { useGetPostsQuery } from './api/postsListApi'
import type { UseGetPostsQueryResult } from './model/interfaces'
import type { Post } from '../../entities/post/model/interfaces';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './postList.module.css'

export default function PostList() {

    const {data: posts, error, isLoading}: UseGetPostsQueryResult = useGetPostsQuery('');

    return (
        <>
            {isLoading && !error && <h2 className={styles.centralTitle}>Загрузка постов</h2>}

            {error && <h2 className={styles.centralTitle}>Произошла ошибка! Попробуйте позже.</h2>}
            
            {posts && <ul className={styles.postList}>
                {posts.map((post: Post) => {
                    return <li key={post.id}>
                        <PostCard postInfo={post}/>
                    </li>
                })}
            </ul>}
        </>
    )

}