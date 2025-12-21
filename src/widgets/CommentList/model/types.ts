import type { Comment } from "../../../entities/comments/model/types";

export interface CommentListProps {
    comments: Comment[],
    error: Error,
}