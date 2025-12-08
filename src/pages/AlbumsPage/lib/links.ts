export interface AlbumLinks {
    to: string,
    text: number | string,
    id: number,
}

const albums: AlbumLinks[] = [];

for (let i = 1; i <= 10; i++) {
    albums.push({
        to: `/users/${i}/albums`,
        text: i,
        id: i,
    })
}

export default albums;