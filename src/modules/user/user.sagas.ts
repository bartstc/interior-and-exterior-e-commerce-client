import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { UserActionTypes } from './user.types';
import {
  SignInStartAction,
  SignUpStartAction,
  DecodedData
} from './user.interfaces';
import { setToken } from '../../utils/setToken';
import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOut
} from './user.actions';

export function* logOut() {
  setToken();
  localStorage.removeItem('jwtToken');
  yield put(signOut());
}

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

export function* checkSession() {
  if (localStorage.jwtToken) {
    const decoded: DecodedData = jwt_decode(localStorage.jwtToken);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      yield logOut();
    } else {
      const payload = {
        id: decoded.id,
        username: decoded.username
      };

      yield put(signInSuccess(payload));
    }
  } else {
    yield logOut();
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onCheckSession() {
  yield takeLatest(UserActionTypes.CHECK_SESSION, checkSession);
}

export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart), call(onCheckSession)]);
}
