import React from 'react';

import { ProductList } from './ShopList.styles';

import { Product } from './shopList/Product.component';
import { Button } from '../../../components/Button/Button.component';

interface IProps {
  gridColumns: number;
}

export const ShopList: React.FC<IProps> = ({ gridColumns }) => {
  return (
    <>
      <ProductList columns={gridColumns}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
      <Button>More results (14)</Button>
    </>
  );
};
