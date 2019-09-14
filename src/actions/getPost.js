import firebase from '../firebase/config';

export const getPost = postID => {
    return async function(dispatch) {
        const postData = await firebase.getPost(postID);
        dispatch({
            type: 'GET_POST',
            payload: postData
        });
    }
}