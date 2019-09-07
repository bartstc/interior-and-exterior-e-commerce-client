import { UserData, AuthError, Action } from './user.interfaces';
import { UserActionTypes } from './user.types';
import { isEmpty } from '../../utils/isEmpty';

export interface UserReducerState {
  currentUser: UserData | null;
  isAuth: boolean;
  error: AuthError | null;
}

const initState: UserReducerState = {
  currentUser: null,
  isAuth: false,
  error: null
};

export const userReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.signInSuccess:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: !isEmpty(action.payload),
        error: null
      };

    case UserActionTypes.signOut:
      return {
        ...state,
        currentUser: null,
        isAuth: false,
        error: null
      };

    case UserActionTypes.signInFailure:
    case UserActionTypes.signUpFailure:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
