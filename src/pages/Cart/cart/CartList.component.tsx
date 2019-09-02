import React from 'react';

import { CartListWrapper } from './CartList.styles';

import { CartProduct } from './cartList/CartProduct.component';

export const CartList: React.FC = () => {
  return (
    <CartListWrapper>
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </CartListWrapper>
  );
};
