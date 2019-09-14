import firebase from '../firebase/config';

export const deletePost = (postID, fileRef) => {
    return async function(dispatch) {
        const post = await firebase.deletePost(postID, fileRef);
        dispatch({
            type: 'DELETE_POST',
            payload: post
        });
    }
}