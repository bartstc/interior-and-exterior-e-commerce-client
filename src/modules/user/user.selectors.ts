import { createSelector } from 'reselect';

import { Store } from '../rootReducer';

const selectUser = (state: Store) => state.user;

export const selectIsAuth = createSelector(
  [selectUser],
  user => user.isAuth
);

export const selectAuthError = createSelector(
  [selectUser],
  user => user.error
);

export const selectIsFetching = createSelector(
  [selectUser],
  user => user.isFetching
);
