import { action } from "typesafe-actions";
import { Posts, TypesPosts } from "./types";


export const getPost = (payload: Posts) => action(TypesPosts.GET_POSTS, payload)