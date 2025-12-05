export interface LinkType {
    to: string,
    text: string,
    id: number
}

export type Links = LinkType[];

export const links: Links = [
    {
        to: '/',
        text: 'Главная',
        id: 0,
    },
    {
        to: 'posts',
        text: 'Все посты',
        id: 1,
    },
    {
        to: 'users/:id/albums',
        text: 'Альбомы пользователя',
        id: 2,
    },
    {
        to: 'users/:id/todos',
        text: 'Список задач пользователя',
        id: 3,
    },
    {
        to: 'users/:id/posts',
        text: 'Посты пользотвателя',
        id: 4,
    },
    {
        to: 'albums/:id/photos',
        text: 'Фотографии пользователя',
        id: 5,
    },
]