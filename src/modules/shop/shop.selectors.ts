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

export const selectFilteredProducts = createSelector(
  [selectShop],
  shop => shop.filteredProducts
);

export const selectFilteredProductsAmount = createSelector(
  [selectFilteredProducts],
  products => products.length
);

export const selectFetchedProductsAmount = createSelector(
  [selectShop],
  shop => shop.fetchedProducts.length
);

export const selectProductsFetched = createSelector(
  [selectShop],
  shop => shop.fetchedProducts.length > 0
);

export const selectColorFilters = createSelector(
  [selectShop],
  shop => shop.colorFilters
);

export const selectCharacterFilters = createSelector(
  [selectShop],
  shop => shop.characterFilters
);

export const selectMinPrice = createSelector(
  [selectShop],
  shop => shop.minPrice
);

export const selectMaxPrice = createSelector(
  [selectShop],
  shop => shop.maxPrice
);

export const selectLimit = createSelector(
  [selectShop],
  shop => shop.limit
);

export const selectQuery = createSelector(
  [selectShop],
  shop => shop.query
);
