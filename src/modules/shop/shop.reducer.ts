import { Reducer } from 'redux';

import { Product, ShopActions, FilterItem } from './shop.interfaces';
import { ShopActionTypes } from './shop.types';
import { createFiltersList } from './shop.utils';

export interface ShopReducerState {
  fetchedProducts: Product[];
  filteredProducts: Product[];
  limit: number;
  colorFilters: FilterItem[];
  characterFilters: FilterItem[];
  isFetching: boolean;
  error: string | null;
}

const initState: ShopReducerState = {
  fetchedProducts: [],
  filteredProducts: [],
  limit: 12,
  colorFilters: [],
  characterFilters: [],
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
        fetchedProducts: action.payload,
        filteredProducts: action.payload.filter((_, i) => i < state.limit),
        limit: 12,
        colorFilters: createFiltersList(action.payload, 'color'),
        characterFilters: createFiltersList(action.payload, 'character'),
        isFetching: false
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
