import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducerPosts from "./ducks/posts"
import reducerStories from "./ducks/stories"
import reducerUser from "./ducks/user"


const createRootReducer = () => combineReducers({
    stories: reducerStories,
    user: reducerUser,
    posts: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }