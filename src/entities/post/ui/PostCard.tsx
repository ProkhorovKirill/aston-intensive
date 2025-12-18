import { Link } from "react-router-dom";
import type { Post } from "../model/types";
import styles from './postCard.module.css'
import sharedStyles from '../../../shared/ui/shared.module.css'

export default function PostCard({postInfo} : {postInfo: Post}) {

    return (
        <div className={styles.postCard}>
            <h4 className={styles.postCardTitle}>Заголовок: {postInfo.title}</h4>
            <p className={styles.postCardBody}>{postInfo.body}</p>
            {location.pathname === '/posts' && <Link to={String(postInfo.id)} className={sharedStyles.Link}>Перейти к посту</Link>}
        </div>
    )

}