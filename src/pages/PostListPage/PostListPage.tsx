import PostListContainer from "../../widgets/PostList/PostList";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import CommentListContainer from "../../widgets/CommentList/ui/CommentList";

export default function PostListPage() {
    
    return  (

        <>
        <PostLengthFilter>
            <PostListContainer/>
        </PostLengthFilter>
        <CommentListContainer />
        </>
    )
}