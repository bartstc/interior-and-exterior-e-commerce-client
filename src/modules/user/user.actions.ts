import {
  UserData,
  CheckSessionAction,
  SignInCredentials,
  SignInStartAction,
  SignInSuccessAction,
  SignInFailureAction,
  SignUpCredentials,
  SignUpStartAction,
  SignUpSuccessAction,
  SignUpFailureAction,
  SignOutAction,
  ClearErrorsAction
} from './user.interfaces';
import { UserActionTypes } from './user.types';

export const checkSession = (): CheckSessionAction => ({
  type: UserActionTypes.CHECK_SESSION
});

export const signInStart = (creds: SignInCredentials): SignInStartAction => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: creds
});

export const signInSuccess = (userData: UserData): SignInSuccessAction => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: userData
});

export const signInFailure = (error: string): SignInFailureAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signUpStart = (creds: SignUpCredentials): SignUpStartAction => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: creds
});

export const signUpSuccess = (userData: UserData): SignUpSuccessAction => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: userData
});

export const signUpFailure = (error: string): SignUpFailureAction => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const signOut = (): SignOutAction => ({
  type: UserActionTypes.SIGN_OUT
});

export const clearErrors = (): ClearErrorsAction => ({
  type: UserActionTypes.CLEAR_ERRORS
});
