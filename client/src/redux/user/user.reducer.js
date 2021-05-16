import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  userHidden: true,
  updateError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UserActionTypes.SET_CURRENT_USER:
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //   };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.USER_DROPDOWN_HIDDEN:
      return {
        ...state,
        userHidden: !state.userHidden,
      };
    case UserActionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        updateError: null,
      };
    case UserActionTypes.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        updateError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
