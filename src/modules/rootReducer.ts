import { combineReducers } from 'redux';

import { UserReducerState, userReducer } from './user/user.reducer';
import { ShopReducerState, shopReducer } from './shop/shop.reducer';

export interface Store {
  user: UserReducerState;
  shop: ShopReducerState;
}

export const rootReducer = combineReducers<Store>({
  user: userReducer,
  shop: shopReducer
});
