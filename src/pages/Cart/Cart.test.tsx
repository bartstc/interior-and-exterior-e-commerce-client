import { render } from '@testing-library/react';
import { Cart } from './Cart.component';
import { withProvider } from '../../utils/testUtils';

const CartWithProvider = withProvider(Cart);

describe('<Cart />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(CartWithProvider({}));
    expect(asFragment()).toMatchSnapshot();
  });
});
