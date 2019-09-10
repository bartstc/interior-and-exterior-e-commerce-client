import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ProductList, Warning } from './ShopList.styles';

import { Product } from './shopList/Product.component';
import { Button } from '../../../components/Button/Button.component';

import { Product as IProduct } from '../../../modules/shop/shop.interfaces';
import { Store } from '../../../modules/rootReducer';
import { selectProducts } from '../../../modules/shop/shop.selectors';

interface IProps {
  gridColumns: number;
  products: IProduct[];
}

const _ShopList: React.FC<IProps> = ({ gridColumns, products }) => {
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

interface ShopListSelection {
  products: IProduct[];
}

const mapStateToProps = createStructuredSelector<Store, ShopListSelection>({
  products: selectProducts
});

export const ShopList = connect(mapStateToProps)(_ShopList);
