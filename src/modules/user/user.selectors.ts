import { createSelector } from 'reselect';

import { IStore } from '../rootReducer';

const selectUser = (state: IStore) => state.user;

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
