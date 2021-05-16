import { takeLatest, put, all, call, select } from 'redux-saga/effects';
// import firebase from 'firebase/app';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

import { UserActionTypes } from './user.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  registerSuccess,
  registerFailure,
  updateUserProfileSuccess,
  updateUserProfileFailure,
} from './user.actions';

import { selectCurrentUser } from './user.selectors';

// REVIEW: Redux-saga is pretty much like async/await function
//## =============== Helper generator function =============== ##//

export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
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

//## =============== Register =============== ##//

export function* register({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(registerSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export function* onRegisterStart() {
  yield takeLatest(UserActionTypes.REGISTER_START, register);
}

export function* signInAfterRegister({ payload: { user, additionalData } }) {
  // getSnapshotFromUserAuth() の中で try and catch してるのでここでは必要ない
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onRegisterSuccess() {
  yield takeLatest(UserActionTypes.REGISTER_SUCCESS, signInAfterRegister);
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

//## =============== Sign out =============== ##//

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

//## =============== Update user Profile =============== ##//

export function* updateUser({ payload: { displayName, email } }) {
  try {
    const userAuth = auth.currentUser;
    console.log({ userAuth });
    const userRef = yield call(createUserProfileDocument, userAuth);
    console.log({ userRef });
    const currentUser = yield select(selectCurrentUser);

    yield userRef.update({ displayName });

    // if (email !== '') {
    //   // Re-Authentication step
    //   const credential = firebase.auth.EmailAuthProvider.credential(
    //     userNow.email,
    //     userProvidedPassword
    //   );
    //   // Now you can use that to reauthenticate
    //   yield userNow.reauthenticateWithCredential(credential);
    // yield userNow.updateEmail(email);
    // }

    yield put(updateUserProfileSuccess({ ...currentUser, displayName }));
  } catch (error) {
    yield put(updateUserProfileFailure(error));
  }
}

export function* onUpdateUserProfile() {
  yield takeLatest(UserActionTypes.UPDATE_USER_PROFILE_START, updateUser);
}

//## =============== Combine sagas =============== ##//

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
    call(onUpdateUserProfile),
  ]);
}
