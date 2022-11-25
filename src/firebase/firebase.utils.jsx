
import firebase from 'firebase/compat/app';
 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMnVMw4El0a914f-vxWUWSGZ9Xj8V0MfM",
    authDomain: "crwn-db-71d71.firebaseapp.com",
    projectId: "crwn-db-71d71",
    storageBucket: "crwn-db-71d71.appspot.com",
    messagingSenderId: "787704886369",
    appId: "1:787704886369:web:e4fb55516170f17d27a620",
    measurementId: "G-419C8M487B"
  };

 

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // get access to auth method in firebase
export const firestore = firebase.firestore(); // get access to firestore

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



 
 