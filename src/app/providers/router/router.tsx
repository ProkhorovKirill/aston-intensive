import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import PostListPage from "../../../pages/PostListPage/PostListPage";
import PostPage from "../../../pages/PostPage/PostPage";
import AlbumsPage from "../../../pages/AlbumsPage/AlbumsPage";
import TodosPage from "../../../pages/TodosPages/TodosPage";
import UserPostsPage from "../../../pages/UserPostsPage/UserPostsPage";
import PhotosPage from "../../../pages/PhotosPage/PhotosPage";

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
                element: <UserPostsPage />,
                errorElement: <h2>error</h2>
            },
            {
                path: 'albums/:id/photos',
                element: <PhotosPage />,
                errorElement: <h2>error</h2>
            },
        ]
    },
    

])