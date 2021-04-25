import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

// import { fetchCollectionsStart } from './shop/shop.sagas';
import rootSaga from './root-saga';

const sagaMiddleware = createSageMiddleware();

// middleware を array にしておくことで、他の middleware が必要になったときに追加できる (more scalable)
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// I can just pass the logger and apply the default one
// const store = createStore(rootReducer, applyMiddleware(logger));

// run each individual sagas
// sagaMiddleware.run(fetchCollectionsStart);
// run all the individual sagas
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const reduxStore = { store, persistor };
export default reduxStore;
