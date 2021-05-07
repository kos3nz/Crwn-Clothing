import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { UserActionTypes } from '../user/user.types';
import { CartActionTypes } from './cart.types';
import { clearCart, setCartFromFirebase } from './cart.actions';

import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';

import { getUserCartRef } from '../../firebase/firebase.utils';

//## =============== Clear cart =============== ##//

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

//## =============== Set cart items when user signs in =============== ##//

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapShot = yield cartRef.get();

  yield put(setCartFromFirebase(cartSnapShot.data().cartItems));
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

//## =============== Update cart items in firebase =============== ##//

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onCartChange() {
  const { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } = CartActionTypes;
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART],
    updateCartInFirebase
  );
}

//## =============== Combine sagas =============== ##//

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
