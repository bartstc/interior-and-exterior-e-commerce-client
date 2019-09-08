import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { UserActionTypes } from './user.types';
import { SignInStartAction, SignUpStartAction } from './user.interfaces';
import { setToken } from '../../utils/setToken';
import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
} from './user.actions';

export function* signIn({ payload }: SignInStartAction) {
  try {
    const {
      data: { id, username, token }
    } = yield axios.post('/auth/signin', payload);

    localStorage.setItem('jwtToken', token);
    setToken(token);

    yield put(signInSuccess({ id, username }));
  } catch (err) {
    yield put(signInFailure(err.response.data.message));
  }
}

export function* signUp({ payload }: SignUpStartAction) {
  try {
    const {
      data: { id, username, token }
    } = yield axios.post('/auth/signup', payload);
    localStorage.setItem('jwtToken', token);
    setToken(token);

    yield put(signUpSuccess({ id, username }));
  } catch (err) {
    yield put(signUpFailure(err.response.data.message));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)]);
}
