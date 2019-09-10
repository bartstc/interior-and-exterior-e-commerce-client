import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { shopSagas } from './shop/shop.sagas';

export function* rootSaga() {
  yield all([call(userSagas), call(shopSagas)]);
}
