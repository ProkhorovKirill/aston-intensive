import { useGetPostsQuery } from "../../../../entities/posts/api/postsApi";

export default function usePosts() {

    return useGetPostsQuery({ _limit: 5, _page: 1 });

}

