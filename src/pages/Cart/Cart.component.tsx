import React from 'react';

import { CartWrapper, Title } from './Cart.styles';

import { CartList } from './cart/CartList.component';
import { Checkout } from './cart/Checkout.component';

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
