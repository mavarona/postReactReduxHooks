import firebase from '../firebase/config';

export const loginUser = (email, password) => {
    return async function(dispatch) {
        const user = await firebase.login(email, password);
        if (user) {
            dispatch({
                type: 'LOGIN_USER',
                payload: user
            });
            return user;
        }
    }
}