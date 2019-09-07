import { combineReducers } from 'redux';

import { UserReducerState, userReducer } from './user/user.reducer';

export interface IStore {
  user: UserReducerState;
}

export const rootReducer = combineReducers<IStore>({
  user: userReducer
});
