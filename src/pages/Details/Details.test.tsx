import React from 'react';
import { render, wait } from '@testing-library/react';
import axios from 'axios';
import { DetailsProps, _Details } from './Details.component';
import { Product } from '../../modules/shop/shop.interfaces';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const productData: Product = {
  character: 'modern',
  collection: 'clocks',
  color: 'black',
  description: 'lorem ipsum',
  id: '1',
  images: ['aa', 'bb'],
  name: 'Black Modern Clock',
  price: '200',
  type: 'clocks'
};

describe('<Details />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockAddItemToCart = jest.fn();
  const productId = '1';

  const props: DetailsProps | any = {
    addItemToCart: mockAddItemToCart,
    match: { params: { id: productId } }
  };

  const setup = (props: any) => {
    const utils = render(<_Details {...props} />);
    return { ...utils };
  };

  it('fetches and displays product data', async () => {
    // mockedAxios.get.mockResolvedValueOnce({ data: productData });
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: productData })
    );

    const { getByTestId, getByText } = setup(props);

    expect(getByTestId('Spinner')).toBeInTheDocument();

    // const resolvedProductName = await waitForElement(() => {
    //   getByText(/black modern clock/i)
    // });
    await wait();

    expect(getByText(/black modern clock/i)).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toBeCalledWith(`/products/${productId}`);
  });
});
