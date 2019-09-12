import { createSelector } from 'reselect';

import { Store } from '../rootReducer';

const selectCart = (state: Store) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, cartItem, _, __): number => {
      if (!cartItem.quantity) return acc;
      return acc + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, cartItem, _, __): number => {
      if (!cartItem.quantity) return acc;
      const total = acc + cartItem.quantity * parseFloat(cartItem.price);

      return parseFloat(total.toFixed(2));
    }, 0)
);
