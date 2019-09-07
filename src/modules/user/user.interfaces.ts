import { UserActionTypes } from './user.types';

/* ===== Common Interfaces ===== */

export interface UserData {
  id: string;
  username: string;
}

export interface AuthError {
  message: string;
  status: number;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

/* ===== Action Interfaces ===== */

export interface CheckSessionAction {
  type: UserActionTypes.checkSession;
}

export interface SignInStartAction {
  type: UserActionTypes.signInStart;
  payload: SignInCredentials;
}

export interface SignInSuccessAction {
  type: UserActionTypes.signInSuccess;
  payload: UserData;
}

export interface SignInFailureAction {
  type: UserActionTypes.signInFailure;
  payload: AuthError;
}

export interface SignUpStartAction {
  type: UserActionTypes.signUpStart;
  payload: SignUpCredentials;
}

export interface SignUpSuccessAction {
  type: UserActionTypes.signUpSuccess;
  payload: UserData;
}

export interface SignUpFailureAction {
  type: UserActionTypes.signUpFailure;
  payload: AuthError;
}

export interface SignOutAction {
  type: UserActionTypes.signOut;
}

export type Action =
  | CheckSessionAction
  | SignInStartAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpStartAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | SignOutAction;
