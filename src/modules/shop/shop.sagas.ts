import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { ShopActionTypes } from './shop.types';
import {
  FetchProductsByTypeAction,
  FetchProductsByQueryAction
} from './shop.interfaces';
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  setQuery,
  clearQuery
} from './shop.actions';

export function* fetchProducts(fetchMethod: string, payload: string) {
  try {
    const { data } = yield axios.get(`/products/${fetchMethod}/${payload}`);

    yield put(fetchProductsSuccess(data));
  } catch (err) {
    yield put(fetchProductsFailure(err.response.data.message));
  }
}

export function* fetchProductsByType({ payload }: FetchProductsByTypeAction) {
  try {
    yield fetchProducts('type', payload);
    yield put(clearQuery());
  } catch (err) {
    yield put(fetchProductsFailure(err.response.data.message));
  }
}

export function* fetchProductsByQuery({ payload }: FetchProductsByQueryAction) {
  try {
    yield fetchProducts('query', payload);
    yield put(setQuery(payload));
  } catch (err) {
    yield put(fetchProductsFailure(err.response.data.message));
  }
}

export function* onFetchProductsByType() {
  yield takeLatest(ShopActionTypes.FETCH_PRODUCTS_BY_TYPE, fetchProductsByType);
}

export function* onFetchProductsByQuery() {
  yield takeLatest(
    ShopActionTypes.FETCH_PRODUCTS_BY_QUERY,
    fetchProductsByQuery
  );
}

export function* shopSagas() {
  yield all([call(onFetchProductsByType), call(onFetchProductsByQuery)]);
}
