import React from 'react';

import { CheckoutWrapper, Total } from './Checkout.styles';

import { Button } from '../../../components/Button/Button.component';

export const Checkout: React.FC = () => (
  <CheckoutWrapper>
    <Total>$ 1299.99</Total>
    <Button>Checkout</Button>
  </CheckoutWrapper>
);
