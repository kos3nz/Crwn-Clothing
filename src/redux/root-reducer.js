import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// Combine all the reducers
// おそらく正しくは all the states
export default combineReducers({
  user: userReducer,
  // REVIEW: user property に userReducer function が通常通り assign されているのではなく、connect(), combineReducers() などを通して(もしくは createState に渡された時)、 userReducer が発火した返り値(= user state)が user property に割り当てられている
});
