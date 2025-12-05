import { Link, useLocation } from "react-router-dom";
import type { Post } from "../model/interfaces";
import styles from './postCard.module.css'

export default function PostCard({postInfo} : {postInfo: Post}) {

    // const location = useLocation()

    return (
        <div className={styles.postCard}>
            <h4 className={styles.postCardTitle}>Заголовок: {postInfo.title}</h4>
            <p className={styles.postCardBody}>{postInfo.body}</p>
            {location.pathname === '/posts' && <Link to={String(postInfo.id)}>Перейти к посту</Link>}
        </div>
    )

}