import React from 'react';

import { Button } from '../../../components/Button/Button';

import { CheckoutWrapper, Total } from './Checkout.styles';

export const Checkout: React.FC = () => (
  <CheckoutWrapper>
    <Total>$ 1299.99</Total>
    <Button>Checkout</Button>
  </CheckoutWrapper>
);
