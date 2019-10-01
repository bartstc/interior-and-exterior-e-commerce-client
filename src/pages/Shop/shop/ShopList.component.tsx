import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ProductsList, Warning } from './ShopList.styles';

import { Product } from './shopList/Product.component';
import { Button } from '../../../components/Button/Button.component';

import { Product as IProduct } from '../../../modules/shop/shop.interfaces';
import { Store } from '../../../modules/rootReducer';
import {
  selectFilteredProducts,
  selectProductsFetched,
  selectFilteredProductsAmount,
  selectLimit,
  selectQuery
} from '../../../modules/shop/shop.selectors';
import {
  fetchProductsByType,
  increaseLimit
} from '../../../modules/shop/shop.actions';

interface ShopListSelection {
  filteredProducts: IProduct[];
  filteredProductsAmount: number;
  productsFetched: boolean;
  limit: number;
  query: string;
}

export interface ShopListProps extends ShopListSelection {
  gridColumns: number;
  fetchProductsByType: typeof fetchProductsByType;
  increaseLimit: typeof increaseLimit;
}

export const _ShopList: React.FC<ShopListProps> = ({
  filteredProducts,
  productsFetched,
  filteredProductsAmount,
  limit,
  query,
  gridColumns,
  fetchProductsByType,
  increaseLimit
}) => {
  useEffect(() => {
    if (!productsFetched && !query) fetchProductsByType('all');
  }, [productsFetched, query, fetchProductsByType]);

  return !filteredProducts.length ? (
    <Warning>No results.</Warning>
  ) : (
    <>
      <ProductsList columns={gridColumns}>
        {filteredProducts
          .filter((_, i) => i < limit)
          .map(product => (
            <Product key={product.id} productData={product} />
          ))}
      </ProductsList>
      {filteredProductsAmount > limit && (
        <Button onClick={increaseLimit}>
          More results ({filteredProductsAmount - limit})
        </Button>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector<Store, ShopListSelection>({
  filteredProducts: selectFilteredProducts,
  filteredProductsAmount: selectFilteredProductsAmount,
  productsFetched: selectProductsFetched,
  limit: selectLimit,
  query: selectQuery
});

export const ShopList = connect(
  mapStateToProps,
  { fetchProductsByType, increaseLimit }
)(_ShopList);
