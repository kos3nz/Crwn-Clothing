import { createSelector } from 'reselect';

const selectAlert = (state) => state.alert;

export const selectShowAlert = createSelector(
  [selectAlert],
  (alert) => alert.showAlert
);

export const selectHasError = createSelector(
  [selectAlert],
  (alert) => alert.hasError
);

export const selectAlertMessage = createSelector(
  [selectAlert],
  (alert) => alert.alertMessage
);
