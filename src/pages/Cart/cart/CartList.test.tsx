import { render } from '@testing-library/react';
import { CartListProps, _CartList } from './CartList.component';
import { withProvider } from '../../../utils/testUtils';

const CartListWithProvider = withProvider(_CartList);

describe('<CartList />', () => {
  const props: CartListProps = {
    cartItems: [
      {
        character: 'modern',
        collection: 'clocks',
        color: 'black',
        description: 'lorem ipsum',
        id: '1',
        images: ['aa', 'bb'],
        name: 'Clock',
        price: '200',
        type: 'clocks'
      },
      {
        character: 'modern',
        collection: 'clocks',
        color: 'black',
        description: 'lorem ipsum',
        id: '2',
        images: ['aa', 'bb'],
        name: 'Clock',
        price: '200',
        type: 'clocks'
      }
    ]
  };

  const setup = (props: CartListProps) => {
    const utils = render(CartListWithProvider(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains 2 items on the list', () => {
    const { getAllByText } = setup(props);
    expect(getAllByText(/clock/i)).toHaveLength(2);
  });

  it('contains warning message', () => {
    const { getByText } = setup({ ...props, cartItems: [] });
    expect(getByText(/cart is empty/i)).toBeInTheDocument();
  });
});
