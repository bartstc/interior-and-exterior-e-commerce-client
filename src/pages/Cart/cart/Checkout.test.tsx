import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckoutProps, _Checkout } from './Checkout.component';

describe('<Checkout />', () => {
  const mockClearCart = jest.fn();

  const props: CheckoutProps = {
    total: 300,
    clearCart: mockClearCart
  };

  const setup = (props: CheckoutProps) => {
    const utils = render(<_Checkout {...props} />);
    const total = utils.getByText(/total:/i);
    const checkoutBtn = utils.getByText(/checkout/i) as HTMLButtonElement;
    const clearCartBtn = utils.getByText(/clear cart/i) as HTMLButtonElement;

    return { ...utils, total, checkoutBtn, clearCartBtn };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `clearCart` action', () => {
    const { checkoutBtn, clearCartBtn, total, rerender } = setup(props);
    fireEvent.click(checkoutBtn);
    fireEvent.click(clearCartBtn);

    expect(mockClearCart).toHaveBeenCalledTimes(2);
    rerender(<_Checkout {...props} total={0} />);

    expect(total).toHaveTextContent('Total: $ 0');
  });
});
