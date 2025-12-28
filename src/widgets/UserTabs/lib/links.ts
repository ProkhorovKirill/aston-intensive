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
        to: 'users/1/albums',
        text: 'Альбомы пользователя',
        id: 2,
    },
    {
        to: 'users/1/todos',
        text: 'Список задач пользователя',
        id: 3,
    },
    {
        to: 'users/1/posts',
        text: 'Посты пользователя',
        id: 4,
    },
    {
        to: 'albums/1/photos',
        text: 'Фотографии пользователя',
        id: 5,
    },
]