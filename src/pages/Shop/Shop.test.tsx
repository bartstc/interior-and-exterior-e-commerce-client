import { render } from '@testing-library/react';
import { withProvider } from '../../utils/testUtils';
import { _Shop, ShopProps } from './Shop.component';

const ShopWithProvider = withProvider(_Shop);

describe('<Shop />', () => {
  const props: ShopProps = {
    isFetching: false
  };

  const setup = (props: ShopProps) => {
    const utils = render(ShopWithProvider(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders spinner when `isFetching` prop is true', () => {
    const { getByTestId } = setup({ isFetching: true });
    expect(getByTestId('Spinner')).toBeInTheDocument();
  });
});
