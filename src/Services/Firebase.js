import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyjrx39ur8BzwwJxZNOF7qbnuSC5dtZXA",
  authDomain: "mywalletfirebase-c6f44.firebaseapp.com",
  projectId: "mywalletfirebase-c6f44",
  storageBucket: "mywalletfirebase-c6f44.appspot.com",
  messagingSenderId: "811269705542",
  appId: "1:811269705542:web:44dcb04009cf7340755f47",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app };
