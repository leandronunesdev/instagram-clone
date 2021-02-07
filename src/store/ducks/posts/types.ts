export enum TypesPosts {
    GET_POSTS = 'GET_POST'
}

export interface PostItem {
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    location: string,
    description: string,
    likes: number
}

export interface Posts {
    arrayPosts: PostItem[]
}

export interface PostsState {
    posts: Posts
}