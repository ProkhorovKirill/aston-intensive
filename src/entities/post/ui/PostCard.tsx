import type { Post } from "../model/interfaces";
import styles from './postCard.module.css'

export default function PostCard({postInfo} : {postInfo: Post}) {

    return (
        <div className={styles.postCard}>
            <h4 className={styles.postCardTitle}>Заголовок: {postInfo.title}</h4>
            <p className={styles.postCardBody}>{postInfo.body}</p>
        </div>
    )

}