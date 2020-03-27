import firebase from "firebase/app"; 
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNvDxrYHBAtgcMmPml1DbQzMtEUu5WhIM",
  authDomain: "crwn-db-62dfe.firebaseapp.com",
  databaseURL: "https://crwn-db-62dfe.firebaseio.com",
  projectId: "crwn-db-62dfe",
  storageBucket: "crwn-db-62dfe.appspot.com",
  messagingSenderId: "743498040393",
  appId: "1:743498040393:web:179673a85a6f98c0b4ab98",
  measurementId: "G-R1PX8RMS95"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ "prompt": "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;