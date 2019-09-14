import {
    combineReducers
} from "redux";

import createUser from "./signinReducer";
import loginUser from "./loginReducer";
import logoutUser from "./logoutReducer";
import createPost from './createPostReducer';
import getPosts from './getPostsReducer';
import getPost from './getPostReducer';
import updatePost from './updatePostReducer';
import deletePost from './deletePostReducer';

const reducers = combineReducers({
    signIn: createUser,
    logIn: loginUser,
    logOut: logoutUser,
    createPost: createPost,
    posts: getPosts,
    post: getPost,
    updatePost: updatePost,
    deletePost: deletePost
});

export default reducers;