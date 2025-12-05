import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import PostListPage from "../../../pages/PostListPage/PostListPage";
import PostPage from "../../../pages/PostPage/PostPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: 'posts',
                element: <PostListPage />,
                errorElement: <h2>error</h2>
            },
            {
                path: 'posts/:id',
                element: <PostPage />,
                errorElement: <h2>error</h2>
            },
            {
                path: 'users/:id/albums',
                element: <h2>users/:id/albums</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'users/:id/todos',
                element: <h2>users/:id/todos</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'users/:id/posts',
                element: <h2>users/:id/posts</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'albums/:id/photos',
                element: <h2>albums/:id/photos</h2>,
                errorElement: <h2>error</h2>
            },
        ]
    },
    

])