import { Reducer } from 'redux';

import { Product } from '../shop/shop.interfaces';
import { CartActions } from './cart.interfaces';
import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export interface CartReducerState {
  cartItems: Product[];
}

const initState: CartReducerState = {
  cartItems: []
};

export const cartReducer: Reducer<CartReducerState, CartActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload
        )
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};
