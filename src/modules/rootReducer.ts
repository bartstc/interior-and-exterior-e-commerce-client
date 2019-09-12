import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { UserReducerState, userReducer } from './user/user.reducer';
import { ShopReducerState, shopReducer } from './shop/shop.reducer';
import { CartReducerState, cartReducer } from './cart/cart.reducer';

export interface Store {
  user: UserReducerState;
  shop: ShopReducerState;
  cart: CartReducerState;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer: Reducer<Store> = combineReducers<Store>({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
