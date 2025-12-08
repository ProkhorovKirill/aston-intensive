import { useGetPostsQuery } from "../../../../widgets/PostList/api/postsListApi";

export default function usePosts() {

    return useGetPostsQuery({ _limit: 5, _page: 1 });

}

