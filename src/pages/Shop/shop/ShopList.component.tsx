import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ProductList, Warning } from './ShopList.styles';

import { Product } from './shopList/Product.component';
import { Button } from '../../../components/Button/Button.component';

import { Product as IProduct } from '../../../modules/shop/shop.interfaces';
import { Store } from '../../../modules/rootReducer';
import {
  selectFilteredProducts,
  selectProductsFetched,
  selectFilteredProductsAmount,
  selectLimit
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
}

interface IProps extends ShopListSelection {
  gridColumns: number;
  fetchProductsByType: typeof fetchProductsByType;
  increaseLimit: typeof increaseLimit;
}

const _ShopList: React.FC<IProps> = ({
  filteredProducts,
  productsFetched,
  filteredProductsAmount,
  limit,
  gridColumns,
  fetchProductsByType,
  increaseLimit
}) => {
  useEffect(() => {
    if (!productsFetched) fetchProductsByType('all');
  }, [productsFetched, fetchProductsByType]);

  return !filteredProducts.length ? (
    <Warning>No resutls.</Warning>
  ) : (
    <>
      <ProductList columns={gridColumns}>
        {filteredProducts
          .filter((_, i) => i < limit)
          .map(product => (
            <Product key={product.id} productData={product} />
          ))}
      </ProductList>
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
  limit: selectLimit
});

export const ShopList = connect(
  mapStateToProps,
  { fetchProductsByType, increaseLimit }
)(_ShopList);
