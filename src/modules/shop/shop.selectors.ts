import { createSelector } from 'reselect';

import { Store } from '../rootReducer';

const selectShop = (state: Store) => state.shop;

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectShopError = createSelector(
  [selectShop],
  shop => shop.error
);

export const selectProducts = createSelector(
  [selectShop],
  shop => shop.products
);
