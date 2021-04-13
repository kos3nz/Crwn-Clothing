import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAI569siAdOgzkF2pGKlQA4Fpfr_xX5SUU',
  authDomain: 'fb-crwn-db.firebaseapp.com',
  projectId: 'fb-crwn-db',
  storageBucket: 'fb-crwn-db.appspot.com',
  messagingSenderId: '686728240402',
  appId: '1:686728240402:web:718aa2339237f3eb06e7cb',
  measurementId: 'G-FDHXK42CFB',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// this gives access to this new Google auth provider class from the authentication library.
const provider = new firebase.auth.GoogleAuthProvider();

// always trigger the Google pop up whenever the Google auth provider is used for authentication and signin.
provider.setCustomParameters({ prompt: 'select_account' });

// signInWithPopup method can be used all kinds of pop-ups like Twitter one and Google one, etc...
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
// REVIEW: signInWithPopup did not work for some reason.

// export firebase as default in case I want the whole library.
export default firebase;
