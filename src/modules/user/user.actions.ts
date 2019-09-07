import {
  UserData,
  CheckSessionAction,
  SignInCredentials,
  SignInStartAction,
  SignInSuccessAction,
  AuthError,
  SignInFailureAction,
  SignUpCredentials,
  SignUpStartAction,
  SignUpSuccessAction,
  SignUpFailureAction,
  SignOutAction
} from './user.interfaces';
import { UserActionTypes } from './user.types';

export const checkSession = (): CheckSessionAction => ({
  type: UserActionTypes.checkSession
});

export const signInStart = (creds: SignInCredentials): SignInStartAction => ({
  type: UserActionTypes.signInStart,
  payload: creds
});

export const signInSuccess = (userData: UserData): SignInSuccessAction => ({
  type: UserActionTypes.signInSuccess,
  payload: userData
});

export const signInFailure = (error: AuthError): SignInFailureAction => ({
  type: UserActionTypes.signInFailure,
  payload: error
});

export const signUpStart = (creds: SignUpCredentials): SignUpStartAction => ({
  type: UserActionTypes.signUpStart,
  payload: creds
});

export const signUpSuccess = (userData: UserData): SignUpSuccessAction => ({
  type: UserActionTypes.signUpSuccess,
  payload: userData
});

export const signUpFailure = (error: AuthError): SignUpFailureAction => ({
  type: UserActionTypes.signUpFailure,
  payload: error
});

export const signOut = (): SignOutAction => ({
  type: UserActionTypes.signOut
});
