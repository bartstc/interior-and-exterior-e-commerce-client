import { Product } from '../shop/shop.interfaces';
import {
  AddItemAction,
  RemoveItemAction,
  ClearItemFromCartAction,
  ClearCartAction
} from './cart.interfaces';
import { CartActionTypes } from './cart.types';

export const addItem = (item: Product): AddItemAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: Product): RemoveItemAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (id: string): ClearItemFromCartAction => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: id
});

export const clearCart = (): ClearCartAction => ({
  type: CartActionTypes.CLEAR_CART
});
