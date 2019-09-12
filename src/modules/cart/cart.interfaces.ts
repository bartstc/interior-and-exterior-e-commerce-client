import { CartActionTypes } from './cart.types';
import { Product } from '../shop/shop.interfaces';

export interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: Product;
}

export interface RemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: Product;
}

export interface ClearItemFromCartAction {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: string;
}

export interface ClearCartAction {
  type: CartActionTypes.CLEAR_CART;
}

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | ClearItemFromCartAction
  | ClearCartAction;
