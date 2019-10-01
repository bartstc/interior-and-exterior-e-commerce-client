import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartProductProps, _CartProduct } from './CartProduct.component';

describe('<CartProduct />', () => {
  const mockAddItem = jest.fn();
  const mockRemoveItem = jest.fn();
  const mockClearItemFromCart = jest.fn();

  const props: CartProductProps = {
    addItem: mockAddItem,
    removeItem: mockRemoveItem,
    clearItemFromCart: mockClearItemFromCart,
    cartItemData: {
      character: 'modern',
      collection: 'clocks',
      color: 'black',
      description: 'lorem ipsum',
      id: '1',
      images: ['aa', 'bb'],
      name: 'Clock',
      price: '200',
      type: 'clocks'
    }
  };

  const setup = (props: CartProductProps) => {
    const utils = render(<_CartProduct {...props} />);
    const addBtn = utils.getByTestId('add-btn');
    const removeBtn = utils.getByTestId('remove-btn');
    const clearBtn = utils.getByTestId('clear-btn');

    return { ...utils, addBtn, removeBtn, clearBtn };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `addItem` action', () => {
    const { addBtn } = setup(props);
    fireEvent.click(addBtn);

    expect(mockAddItem).toHaveBeenCalledTimes(1);
  });

  it('calls `removeItem` action', () => {
    const { removeBtn } = setup(props);
    fireEvent.click(removeBtn);

    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });

  it('calls `clearItemFromCart` action', () => {
    const { clearBtn } = setup(props);
    fireEvent.click(clearBtn);

    expect(mockClearItemFromCart).toHaveBeenCalledTimes(1);
  });
});
