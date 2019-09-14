import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CheckoutWrapper, Total } from './Checkout.styles';

import { Button } from '../../../components/Button/Button.component';

import { Store } from '../../../modules/rootReducer';
import { selectCartTotal } from '../../../modules/cart/cart.selectors';
import { clearCart } from '../../../modules/cart/cart.actions';

interface CheckoutSelection {
  total: number;
}

interface CheckoutProps extends CheckoutSelection {
  clearCart: typeof clearCart;
}

export const _Checkout: React.FC<CheckoutProps> = ({ total, clearCart }) => (
  <CheckoutWrapper>
    <Total>Total: $ {total}</Total>
    <Button disabled={total === 0} onClick={clearCart}>
      Checkout
    </Button>
    <Button disabled={total === 0} onClick={clearCart}>
      Clear Cart
    </Button>
  </CheckoutWrapper>
);

const mapStateToProps = createStructuredSelector<Store, CheckoutSelection>({
  total: selectCartTotal
});

export const Checkout = connect(
  mapStateToProps,
  { clearCart }
)(_Checkout);
