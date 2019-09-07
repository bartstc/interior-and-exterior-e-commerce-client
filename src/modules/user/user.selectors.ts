import { createSelector } from 'reselect';
import { IStore } from '../rootReducer';

const selectUser = (state: IStore) => state.user;

export const selectIsAuth = createSelector(
  [selectUser],
  user => user.isAuth
);
