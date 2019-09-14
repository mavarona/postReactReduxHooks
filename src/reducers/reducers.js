import {
    combineReducers
} from "redux";

import createUser from "./signinReducer";
import loginUser from "./loginReducer";
import logoutUser from "./logoutReducer";
import createPost from './createPostReducer';

const reducers = combineReducers({
    signIn: createUser,
    logIn: loginUser,
    logOut: logoutUser,
    createPost: createPost
});

export default reducers;