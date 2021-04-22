import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure } from './user.actions';

// REVIEW: Redux-saga is pretty much like async/await function
//## =============== Helper generator function =============== ##//

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    // put() puts things back into our regular Redux flow
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

//## =============== Sign in with Google =============== ##//

export function* signInWithGoogle() {
  try {
    const userAuth = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(userAuth.user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//## =============== Sign in with Email and Password =============== ##//

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const userAuth = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(userAuth.user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

//## =============== Check User Session =============== ##//

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//## =============== Combine sagas =============== ##//

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
  ]);
}
