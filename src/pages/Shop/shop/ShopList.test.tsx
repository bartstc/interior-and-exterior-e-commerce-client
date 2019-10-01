import { render, fireEvent } from '@testing-library/react';
import { withProvider } from '../../../utils/testUtils';
import { _ShopList, ShopListProps } from './ShopList.component';

const ShopListWithProvider = withProvider(_ShopList);

describe('<ShopList />', () => {
  const mockFetchProductsByType = jest.fn();
  const mockIncreaseLimit = jest.fn();

  const props: ShopListProps = {
    filteredProducts: [
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
      },
      {
        character: 'modern',
        collection: 'clocks',
        color: 'black',
        description: 'lorem ipsum',
        id: '3',
        images: ['aa', 'bb'],
        name: 'Clock',
        price: '200',
        type: 'clocks'
      }
    ],
    filteredProductsAmount: 3,
    productsFetched: true,
    limit: 2,
    query: '',
    gridColumns: 2,
    fetchProductsByType: mockFetchProductsByType,
    increaseLimit: mockIncreaseLimit
  };

  const setup = (props: ShopListProps) => {
    const utils = render(ShopListWithProvider(props));
    const productsList = utils.container.querySelector('ul');

    return { ...utils, productsList };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('products list', () => {
    it('contains correct style rule', () => {
      const { productsList } = setup(props);
      expect(productsList).toHaveStyle('grid-template-columns: repeat(2, 1fr)');
    });
  });

  it('calls `increaseLimit` action', () => {
    const { getByText, rerender, container } = setup(props);

    fireEvent.click(getByText(/more results/i));
    expect(mockIncreaseLimit).toHaveBeenCalledTimes(1);

    rerender(ShopListWithProvider({ ...props, limit: 4 }));
    expect(container.querySelector('button[type="button"]')).toBeNull();
    expect(container.querySelectorAll('li').length).toBe(3);
  });

  it('contains warning with text `no results`', () => {
    const { getByText } = setup({ ...props, filteredProducts: [] });
    expect(getByText(/no results/i)).toBeInTheDocument();
  });

  it('calls `fetchProductsByType` action', () => {
    const { rerender } = setup(props);
    rerender(ShopListWithProvider({ ...props, productsFetched: false }));

    expect(mockFetchProductsByType).toBeCalledWith('all');
  });
});
