import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import PostListPage from "../../../pages/PostListPage/PostListPage";
import PostPage from "../../../pages/PostPage/PostPage";
import AlbumsPage from "../../../pages/AlbumsPage/AlbumsPage";
import TodosPage from "../../../pages/TodosPages/TodosPage";

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
                element: <AlbumsPage />,
                errorElement: <h2>error</h2>
            },
            {
                path: 'users/:id/todos',
                element: <TodosPage />,
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