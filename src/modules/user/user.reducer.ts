import { Reducer } from 'redux';

import { UserData, UserActions } from './user.interfaces';
import { UserActionTypes } from './user.types';
import { isEmpty } from '../../utils/isEmpty';

export interface UserReducerState {
  currentUser: UserData | null;
  isAuth: boolean;
  error: string | null;
  isFetching: boolean;
}

const initState: UserReducerState = {
  currentUser: null,
  isAuth: false,
  error: null,
  isFetching: false
};

export const userReducer: Reducer<UserReducerState, UserActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: !isEmpty(action.payload),
        error: null,
        isFetching: false
      };

    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };

    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        isAuth: false,
        error: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case UserActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
