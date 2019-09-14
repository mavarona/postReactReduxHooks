import {
    combineReducers
} from "redux";

import createUser from "./signinReducer";
import loginUser from "./loginReducer";
import logoutUser from "./logoutReducer";

const reducers = combineReducers({
    signIn: createUser,
    logIn: loginUser,
    logOut: logoutUser
});

export default reducers;