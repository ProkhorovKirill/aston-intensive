export interface Photos {
    to: string,
    text: number | string,
    id: number,
}

const photos: Photos[] = [];

for (let i = 1; i <= 10; i++) {
    photos.push({
        to: `/albums/${i}/photos`,
        text: i,
        id: i,
    })
}

export default photos;