import { AlertActionTypes } from './alert.types';

export const showSuccessAlert = (message) => ({
  type: AlertActionTypes.SHOW_SUCCESS_ALERT,
  payload: message,
});

export const showErrorAlert = (errorMessage) => ({
  type: AlertActionTypes.SHOW_ERROR_ALERT,
  payload: errorMessage,
});

export const hideAlert = () => ({
  type: AlertActionTypes.HIDE_ALERT,
});
