import React from 'react';

import { CartList } from './cart/CartList.component';
import { Checkout } from './cart/Checkout.component';

import { CartWrapper, Title } from './Cart.styles';

export const Cart: React.FC = () => {
  return (
    <>
      <Title>Cart</Title>
      <CartWrapper>
        <CartList />
        <Checkout />
      </CartWrapper>
    </>
  );
};
