import { Product, ShopActions } from './shop.interfaces';
import { Reducer } from 'redux';
import { ShopActionTypes } from './shop.types';

export interface ShopReducerState {
  products: Product[];
  isFetching: boolean;
  error: string | null;
}

const initState: ShopReducerState = {
  products: [],
  isFetching: false,
  error: null
};

export const shopReducer: Reducer<ShopReducerState, ShopActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_PRODUCTS_BY_TYPE:
    case ShopActionTypes.FETCH_PRODUCTS_BY_QUERY:
      return {
        ...state,
        isFetching: true
      };

    case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload
      };

    case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};
