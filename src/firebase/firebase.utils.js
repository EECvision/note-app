import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyC_HF0frxUFUz9fonavZIZWIBKHBTcWLa8",
  authDomain: "enote-9d5e7.firebaseapp.com",
  projectId: "enote-9d5e7",
  storageBucket: "enote-9d5e7.appspot.com",
  messagingSenderId: "888041696289",
  appId: "1:888041696289:web:c7ac8e7e64838e8499c760"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}else {
    firebase.app(); 
}

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("error creating user",error.message);
      }
    }
    return userRef;
  }

  export const convertNoteSnapshotToMap=(notes)=>(
    notes.docs.map( doc => doc.data())
  )

  export const getCurrentUser = () => {
    return new Promise((resolve, reject ) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

  