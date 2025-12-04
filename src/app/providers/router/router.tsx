import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: 'posts',
                element: <h2>posts</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'posts/:id',
                element: <h2>posts/id</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'users/:id/albums',
                element: <h2>users/:id/albums</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'users/:id/todos',
                element: <h2>users/:id/albums</h2>,
                errorElement: <h2>error</h2>
            },
            {
                path: 'albums/:id/photos',
                element: <h2>users/:id/posts</h2>,
                errorElement: <h2>error</h2>
            },
        ]
    },
    

])