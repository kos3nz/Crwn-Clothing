import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

import { ShopActionTypes } from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

//## =============== Fetch collections data =============== ##//

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error)));
}

// NOTE: takeEvery() creates a non blocking cade (concurrently running code) in order to not stop our application to continue running either other sagas
// if this function gets called while processing previous request, saga middleware can CANCEL the process and start over again, so that it won't fetch data twice.
export function* fetchCollectionsStart() {
  yield takeLatest(
    // shop component で dispatch() に action obj(= {type: action.type}) が渡されたら発火
    ShopActionTypes.FETCH_COLLECTIONS_START, // ← action.type に一致する string
    fetchCollectionsAsync
  );
}

//## =============== Combine sagas =============== ##//

export function* shopSagas() {
  yield all(call(fetchCollectionsStart));
}
