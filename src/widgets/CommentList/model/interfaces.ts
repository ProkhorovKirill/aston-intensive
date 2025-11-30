type Comment = {
    body: string,
    email: string,
    id: number,
    name: string,
    postId: number,
}

export interface CommentListProps {
    comments: Comment[],
    error: any,
}