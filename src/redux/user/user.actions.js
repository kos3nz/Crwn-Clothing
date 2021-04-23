import { UserActionTypes } from './user.types';

// export const setCurrentUser = (user) => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user,
// });

//## =============== Sign in =============== ##//

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

//## =============== Register =============== ##//

export const registerStart = (userCredentials) => ({
  type: UserActionTypes.REGISTER_START,
  payload: userCredentials,
});

export const registerSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.REGISTER_SUCCESS,
  payload: { user, additionalData },
});

export const registerFailure = (error) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: error,
});

//## =============== Check user session =============== ##//

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

//## =============== Sign out =============== ##//

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
