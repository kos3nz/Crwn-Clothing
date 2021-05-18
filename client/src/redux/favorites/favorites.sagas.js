import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { UserActionTypes } from '../user/user.types';
import { FavoriteActionTypes } from './favorites.types';
import { clearFavorites, setFavoriteFromFirebase } from './favorites.actions';

import { getUserFavoritesRef } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../user/user.selectors';
import { selectFavoriteItems } from './favorites.selectors';

//## =============== Clear favorites on sign out =============== ##//

export function* clearFavoritesOnSignOut() {
  yield put(clearFavorites());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearFavoritesOnSignOut);
}

//## =============== Set favorite items when user signs in =============== ##//

export function* checkFavoritesFromFirebase({ payload: user }) {
  const favoritesRef = yield getUserFavoritesRef(user.id);
  const snapShot = yield favoritesRef.get();

  yield put(setFavoriteFromFirebase(snapShot.data().favoriteItems));
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkFavoritesFromFirebase);
}

//## =============== Update favorite items in firebase =============== ##//

export function* updateFavoritesInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const favoriteRef = yield getUserFavoritesRef(currentUser.id);
      const favoriteItems = yield select(selectFavoriteItems);
      yield favoriteRef.update({ favoriteItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onFavoritesChange() {
  yield takeLatest(
    [FavoriteActionTypes.TOGGLE_FAVORITE],
    updateFavoritesInFirebase
  );
}

//## =============== Combine sagas =============== ##//

export function* favoritesSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onUserSignIn),
    call(onFavoritesChange),
  ]);
}
