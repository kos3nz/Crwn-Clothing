import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware を array にしておくことで、他の middleware が必要になったときに追加できる (more scalable)
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// I can just pass the logger and apply the default one
// const store = createStore(rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

const reduxStore = { store, persistor };
export default reduxStore;
