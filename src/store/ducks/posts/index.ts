import { Posts, TypesPosts } from "./types";

const initialStatePosts: Posts = {
    arrayPosts: []
}

function reducerPosts(state = initialStatePosts, action: any) {
    switch(action.type) {
        case TypesPosts.GET_POSTS:
            return {
                arrayPosts: action.payload
            }
        default:
            return state
    }
}

export default reducerPosts