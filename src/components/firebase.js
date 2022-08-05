import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgWlmZ4iCxXlzhUbCxGAFVlDZqmVzDegM",
  authDomain: "linkedin-clone-c12d2.firebaseapp.com",
  projectId: "linkedin-clone-c12d2",
  storageBucket: "linkedin-clone-c12d2.appspot.com",
  messagingSenderId: "438675184039",
  appId: "1:438675184039:web:206b26a5251f37ca81fe82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default firebaseApp;
export { db, auth };
