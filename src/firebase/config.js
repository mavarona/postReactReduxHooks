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
}

export default new Firebase();
