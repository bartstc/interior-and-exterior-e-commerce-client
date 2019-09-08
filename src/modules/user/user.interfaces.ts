import { UserActionTypes } from './user.types';

/* ===== Common User Module Interfaces ===== */

export interface UserData {
  id: string;
  username: string;
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

export interface DecodedData {
  id: string;
  username: string;
  iat: number;
  exp: number;
}

/* ===== Action Interfaces ===== */

export interface CheckSessionAction {
  type: UserActionTypes.CHECK_SESSION;
}

export interface SignInStartAction {
  type: UserActionTypes.SIGN_IN_START;
  payload: SignInCredentials;
}

export interface SignInSuccessAction {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: UserData;
}

export interface SignInFailureAction {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: string;
}

export interface SignUpStartAction {
  type: UserActionTypes.SIGN_UP_START;
  payload: SignUpCredentials;
}

export interface SignUpSuccessAction {
  type: UserActionTypes.SIGN_UP_SUCCESS;
  payload: UserData;
}

export interface SignUpFailureAction {
  type: UserActionTypes.SIGN_UP_FAILURE;
  payload: string;
}

export interface SignOutAction {
  type: UserActionTypes.SIGN_OUT;
}

export interface ClearErrorsAction {
  type: UserActionTypes.CLEAR_ERRORS;
}

export type UserActions =
  | CheckSessionAction
  | SignInStartAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpStartAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | SignOutAction
  | ClearErrorsAction;
