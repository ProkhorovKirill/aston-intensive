import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../../widgets/PostList/api/postsListApi";
import PostCard from "../../entities/post/ui/PostCard";
import sharedStyles from '../../shared/ui/shared.module.css'
import styles from './postPage.module.css'

export default function PostPage() {


    const urlParams = useParams();
    const {data: post, error, isLoading} = useGetPostQuery(Number(urlParams.id));

    return (
        <>

            <h2 className={sharedStyles.centralTitle}>Пост #{urlParams.id}</h2>

            {error && <h2 className={sharedStyles.centralTitle}>Произошла ошибка при загрузке поста</h2>}

            {isLoading && <h2 className={sharedStyles.centralTitle}>Идет загрузка! Пожалуйста, подождите!</h2>}

            {!isLoading && !error && <PostCard postInfo={post}/>}

            <div className={styles.centralLink}>
                <Link to='/posts' className={sharedStyles.Link}>Назад</Link>
            </div>
            

        </>
    )

}