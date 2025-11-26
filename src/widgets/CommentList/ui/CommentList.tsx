import { useGetCommentsQuery } from "../../PostList/api/postsListApi";
import WithLoading from "../../../shared/lib/hoc/withLoading";
import type { CommentListProps } from "../model/interfaces";
import sharedStyles from '../../../shared/ui/shared.module.css'
import styles from './commentList.module.css'
import React, { useCallback, useState } from "react";
import Button from "../../../shared/ui/Button";


function CommentList({comments, error}: CommentListProps) {

    return (
        <>

            {error && <h2 className={sharedStyles.centralTitle}>Произошла ошибка при загрузке комментариев! Попробуйте позже.</h2>}

            {comments && comments.map((comment) => {
                return  <React.Fragment key={comment.id}>
                    
                            <div className={styles.commentListWrapper}>
                                <h4>Автор: {comment.email}</h4>
                                <p>Заголовок: {comment.name}</p>
                                <p>Комментарий: {comment.body}</p>
                            </div>

                        </React.Fragment>
            })}

        </>
    )

}

const CommentListWithLoading = WithLoading(CommentList);

export default function CommentListContainer() {

    const {data: comments, error, isLoading} = useGetCommentsQuery({_limit: 5, _page:1});
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleComments = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [isOpen]);

    console.log(comments)

    return (

        <>
            <h2 className={sharedStyles.centralTitle}>
                <Button 
                    textValue={isOpen ? 'Комментарии ⬇' : 'Комментарии ⬆'}
                    className={styles.toggleCommentsButton}
                    onClick={handleToggleComments}
                    />
            </h2>
            {isOpen && <CommentListWithLoading 
                isLoading={isLoading}
                error={error}
                className={sharedStyles.centralTitle}
                comments={comments}
            />}
        </>

    )

}