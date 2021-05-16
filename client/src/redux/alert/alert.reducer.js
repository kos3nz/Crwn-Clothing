import { AlertActionTypes } from './alert.types';

const INITIAL_STATE = {
  showAlert: false,
  hasError: false,
  alertMessage: '',
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlertActionTypes.SHOW_SUCCESS_ALERT:
      return {
        ...state,
        showAlert: true,
        hasError: false,
        alertMessage: action.payload,
      };
    case AlertActionTypes.SHOW_ERROR_ALERT:
      return {
        ...state,
        showAlert: true,
        hasError: true,
        alertMessage: action.payload,
      };
    case AlertActionTypes.HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
      };

    default:
      return state;
  }
};

export default alertReducer;
