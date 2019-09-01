import React from 'react';

import { CartProduct } from './cartList/CartProduct.component';

import { CartListWrapper } from './CartList.styles';

export const CartList: React.FC = () => {
  return (
    <CartListWrapper>
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </CartListWrapper>
  );
};
