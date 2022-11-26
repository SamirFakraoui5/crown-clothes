import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMnVMw4El0a914f-vxWUWSGZ9Xj8V0MfM",
  authDomain: "crwn-db-71d71.firebaseapp.com",
  databaseURL: "https://crwn-db-71d71-default-rtdb.firebaseio.com",
  projectId: "crwn-db-71d71",
  storageBucket: "crwn-db-71d71.appspot.com",
  messagingSenderId: "787704886369",
  appId: "1:787704886369:web:315bb8e1ce93765827a620",
  measurementId: "G-YQV9BMZ95X",
};

// get the user auth and store it inside of our dadabase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
   
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAT = new Date(); // new javaScript object that 
    //telling as the current date at the current
    // time when this was involvced
    try {
      await userRef.set({
        displayName,
        email,
        createdAT,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // get access to auth method in firebase
export const firestore = firebase.firestore(); // get access to firestore

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
