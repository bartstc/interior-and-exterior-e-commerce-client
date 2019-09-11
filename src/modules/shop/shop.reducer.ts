import { Reducer } from 'redux';

import { Product, ShopActions, FilterItem } from './shop.interfaces';
import { ShopActionTypes } from './shop.types';
import {
  createFiltersList,
  calcMinPrice,
  calcMaxPrice,
  filterFetchedProducts,
  limitResults
} from './shop.utils';

export interface ShopReducerState {
  fetchedProducts: Product[];
  filteredProducts: Product[];
  limit: number;
  colorFilters: FilterItem[];
  characterFilters: FilterItem[];
  minPrice: number;
  maxPrice: number;
  isFetching: boolean;
  error: string | null;
}

const initState: ShopReducerState = {
  fetchedProducts: [],
  filteredProducts: [],
  limit: 12,
  colorFilters: [],
  characterFilters: [],
  minPrice: 0,
  maxPrice: 500,
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
        filteredProducts: limitResults(action.payload, state.limit),
        limit: 12,
        colorFilters: createFiltersList(action.payload, 'color'),
        characterFilters: createFiltersList(action.payload, 'character'),
        minPrice: calcMinPrice(action.payload),
        maxPrice: calcMaxPrice(action.payload),
        isFetching: false
      };

    case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ShopActionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: limitResults(
          filterFetchedProducts(state.fetchedProducts, action.payload),
          state.limit
        ),
        limit: 12
      };

    default:
      return state;
  }
};
