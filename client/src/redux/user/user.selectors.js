import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserHidden = createSelector(
  [selectUser],
  (user) => user.userHidden
);

export const selectError = createSelector([selectUser], (user) => user.error);

export const selectUpdateError = createSelector(
  [selectUser],
  (user) => user.updateError
);
