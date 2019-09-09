import { ShopActionTypes } from './shop.types';

/* ===== Common Shop Module Types ===== */

export enum Type {
  CHAIRS = 'Chairs',
  LAMPS = 'Lamps',
  CLOCKS = 'Clocks',
  VASES = 'Vases',
  BENCHES = 'Benches',
  FLOWERPOTS = 'Flowerpots',
  PLANTS = 'Plants'
}

export type Query = string;

export interface Product {
  name: string;
  collection: string;
  type: Type;
  price: number;
  color: string;
  character: string;
  description: string;
  images: string[];
}

/* ===== Action Interfaces ===== */

export interface FetchProductsByTypeAction {
  type: ShopActionTypes.FETCH_PRODUCTS_BY_TYPE;
  payload: Type;
}

export interface FetchProductsByQueryAction {
  type: ShopActionTypes.FETCH_PRODUCTS_BY_QUERY;
  payload: Query;
}

export interface FetchProductsSuccessAction {
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface FetchProductsFailureAction {
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ShopActions =
  | FetchProductsByTypeAction
  | FetchProductsByQueryAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;
