import {
    combineReducers
} from "redux";

import createUser from "./signinReducer";
import loginUser from "./loginReducer";
import logoutUser from "./logoutReducer";
import createPost from './createPostReducer';
import getPosts from './getPostsReducer';

const reducers = combineReducers({
    signIn: createUser,
    logIn: loginUser,
    logOut: logoutUser,
    createPost: createPost,
    posts: getPosts
});

export default reducers;