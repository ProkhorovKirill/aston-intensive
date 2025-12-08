export interface UserPostsLinks {
    to: string,
    text: number | string,
    id: number,
}

const userPosts: UserPostsLinks[] = [];

for (let i = 1; i <= 10; i++) {
    userPosts.push({
        to: `/users/${i}/posts`,
        text: i,
        id: i,
    })
}

export default userPosts;