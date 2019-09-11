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
  selectProductsFetched
} from '../../../modules/shop/shop.selectors';
import { fetchProductsByType } from '../../../modules/shop/shop.actions';

interface ShopListSelection {
  products: IProduct[];
  productsFetched: boolean;
}

interface IProps extends ShopListSelection {
  gridColumns: number;
  fetchProductsByType: typeof fetchProductsByType;
}

const _ShopList: React.FC<IProps> = ({
  gridColumns,
  products,
  productsFetched,
  fetchProductsByType
}) => {
  useEffect(() => {
    if (!productsFetched) fetchProductsByType('all');
  }, [productsFetched, fetchProductsByType]);

  return !products.length ? (
    <Warning>No resutls.</Warning>
  ) : (
    <>
      <ProductList columns={gridColumns}>
        {products.map(product => (
          <Product key={product.id} productData={product} />
        ))}
      </ProductList>
      <Button>More results (14)</Button>
    </>
  );
};

const mapStateToProps = createStructuredSelector<Store, ShopListSelection>({
  products: selectFilteredProducts,
  productsFetched: selectProductsFetched
});

export const ShopList = connect(
  mapStateToProps,
  { fetchProductsByType }
)(_ShopList);
