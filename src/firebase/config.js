import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyDVxIadQiP3wx_1GBOzKJfZUzKoD2YUbBk",
    authDomain: "post-react-redux-hooks.firebaseapp.com",
    databaseURL: "https://post-react-redux-hooks.firebaseio.com",
    projectId: "post-react-redux-hooks",
    storageBucket: "post-react-redux-hooks.appspot.com",
    messagingSenderId: "700784459641",
    appId: "1:700784459641:web:156146d9d6223defc3f9a8"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    async signin(email, password) {
        const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => console.log(err));
        return user;
    }

    async login(email, password) {
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => console.log(err));
        return user;
    }

    async logout() {
        const response = await firebase
            .auth()
            .signOut()
            .catch(err => console.log(err));
        return response;
    }

    async getUserState() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    async getPosts() {
        let postsArray = [];
        const posts = await firebase.firestore().collection('posts').get();
        posts.forEach(doc => {
            postsArray.push({
                id: doc.id,
                data: doc.data()
            });
        });
        return postsArray;
    }

    async getPost(id) {
        const post = await firebase.firestore().collection('posts').doc(id).get();
        const postData = post.data();
        return postData;
    }

    async createPost(post) {
        const storageRef = firebase.storage().ref();
        const storageChild = storageRef.child(post.cover.name);
        const postCover = await storageChild.put(post.cover);
        const downloadUrl = await storageChild.getDownloadURL();
        const fileRef = postCover.ref.location.path;

        let newPost = {
            title: post.title,
            content: post.content,
            cover: downloadUrl,
            fileref: fileRef
        }

        const firebasePost = await firebase.firestore().collection('posts').add(newPost).catch(err => console.log(err));

        return firebasePost;

    }

    async updatePost(postid, postData) {
        if (postData['cover']) {
            const storageRef = firebase.storage().ref();
            const storageChild = storageRef.child(postData.cover.name);
            const postCover = await storageChild.put(postData.cover);
            const downloadUrl = await storageChild.getDownloadURL();
            const fileRef = postCover.ref.location.path;

            await storageRef.child(postData['cover']).delete().catch(err => console.log(err));

            let updatePost = {
                title: postData.title,
                content: postData.content,
                cover: downloadUrl,
                fileref: fileRef
            };

            const post = await firebase.firestore().collection('posts').doc(postid).set(updatePost, {
                merge: true
            }).catch(err => console.log(err));

            return post;

        } else {
            const post = await firebase.firestore().collection('posts').doc(postid).set(postData, {
                merge: true
            }).catch(err => console.log(err));

            return post;
        }
    }

    async deletePost(postID, fileRef) {
        const storageRef = firebase.storage().ref();
        await storageRef.child(fileRef).delete().catch(err => console.log(err));
        const post = await firebase.firestore().collection('posts').doc(postID).delete().catch(err => console.log(err));
        return post;
    }


}

export default new Firebase();