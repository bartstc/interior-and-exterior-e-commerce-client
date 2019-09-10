import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { ShopActionTypes } from './shop.types';
import { FetchProductsByTypeAction } from './shop.interfaces';
import { fetchProductsSuccess, fetchProductsFailure } from './shop.actions';

export function* fetchProductsByType({ payload }: FetchProductsByTypeAction) {
  try {
    const { data } = yield axios.get(`/products/type/${payload}`);

    yield put(fetchProductsSuccess(data));
  } catch (err) {
    yield put(fetchProductsFailure(err.response.data.message));
  }
}

export function* onFetchProductsByType() {
  yield takeLatest(ShopActionTypes.FETCH_PRODUCTS_BY_TYPE, fetchProductsByType);
}

export function* shopSagas() {
  yield all([call(onFetchProductsByType)]);
}
