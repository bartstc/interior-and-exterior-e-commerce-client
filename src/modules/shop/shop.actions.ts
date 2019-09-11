import { ShopActionTypes } from './shop.types';
import {
  Type,
  Product,
  FetchProductsByTypeAction,
  FetchProductsByQueryAction,
  FetchProductsSuccessAction,
  FetchProductsFailureAction,
  FilterCriteria,
  FilterProductsAction,
  IncreaseLimitAction,
  SetQueryAction,
  ClearQueryAction
} from './shop.interfaces';

export const fetchProductsByType = (type: Type): FetchProductsByTypeAction => ({
  type: ShopActionTypes.FETCH_PRODUCTS_BY_TYPE,
  payload: type
});

export const fetchProductsByQuery = (
  query: string
): FetchProductsByQueryAction => ({
  type: ShopActionTypes.FETCH_PRODUCTS_BY_QUERY,
  payload: query
});

export const fetchProductsSuccess = (
  products: Product[]
): FetchProductsSuccessAction => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = (
  error: string
): FetchProductsFailureAction => ({
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const filterProducts = (
  filterCriteria: FilterCriteria
): FilterProductsAction => ({
  type: ShopActionTypes.FILTER_PRODUCTS,
  payload: filterCriteria
});

export const increaseLimit = (): IncreaseLimitAction => ({
  type: ShopActionTypes.INCREASE_LIMIT
});

export const setQuery = (query: string): SetQueryAction => ({
  type: ShopActionTypes.SET_QUERY,
  payload: query
});

export const clearQuery = (): ClearQueryAction => ({
  type: ShopActionTypes.CLEAR_QUERY
});
