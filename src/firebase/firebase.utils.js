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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Retrieving user documentRef (still not the actual data, because I actually don't know if the data exists at this point)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('Reference:');
  // console.log(userRef);

  // Fetching the data from the reference
  // documentRef returns a documentSnapshot
  // collectionRef returns a querySnapshot
  // Snapshot cannot use CRUD methods, it's just representing the data
  const snapShot = await userRef.get();
  // console.log('Snapshot:');
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  // Creates a write batch, used for performing multiple writes as a single atomic operation.
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    // collectionRef.doc() will pass an unique id to the docRefs
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // fire off the batch request
  // Commits all of the writes in this write batch as a single atomic unit.
  // commit() returns Promise and the value is void if the request succeeds
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      // encodeURI() convert any string, symbols the web cannot read into readable string
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

//## =============== Initializing Firebase App =============== ##//

// "Firebase App named '[DEFAULT]' already exists" Error への対処
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// this gives access to this new Google auth provider class from the authentication library.
const provider = new firebase.auth.GoogleAuthProvider();

// always trigger the Google pop up whenever the Google auth provider is used for authentication and signin.
provider.setCustomParameters({ prompt: 'select_account' });

// signInWithPopup method can be used all kinds of pop-ups like Twitter one and Google one, etc...
export const signInWithGoogle = () =>
  auth
    .signInWithRedirect(provider)
    .then((result) => console.log("You're successfully logged in"))
    .catch((error) => console.log(error.message));
/* ==============================
REVIEW:= signInWithGoogle
  -- signInWithPopup が Chrome ではタブで開く、 Safari では Pop up で開くが blank のまま、Firefox では Pop up で動作する
  -- signInWithRedirect が Chrome では初めは何故か authentication 通らず browser site settings の clear data で動くようになる、 Safari、Firefox で動作は確認するも authentication は確認せず
  -- Private mode, Chrome ×, Firefox ○, Safari ×
============================== */

// export firebase as default in case I want the whole library.
export default firebase;
