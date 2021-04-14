import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware を array にしておくことで、他の middleware が必要になったときに追加できる (more scalable)
const middlewares = [logger];

// otherwise I can just pass the logger and apply the default one
// const store = createStore(rootReducer, applyMiddleware(logger));

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
