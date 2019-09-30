import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RangeInput, RangeInputProps } from './RangeInput.component';

describe('<RangeInput />', () => {
  const mockOnChange = jest.fn();

  const props: RangeInputProps = {
    name: 'price',
    value: 0,
    onChange: mockOnChange,
    min: 0,
    max: 100,
    id: 'price',
    label: 'price'
  };

  const setup = (props: RangeInputProps) => {
    const utils = render(<RangeInput {...props} />);
    const input = utils.container.querySelector(
      'input[name="price"]'
    ) as HTMLInputElement;

    return { ...utils, input };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `onChange` prop', () => {
    const { input } = setup(props);

    fireEvent.change(input, { target: { value: '50' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('renders `Info` element', () => {
    const { getByText } = setup({ ...props, info: 'info message' });
    const info = getByText(/info message/i);

    expect(info).toBeInTheDocument();
    expect(info).toHaveTextContent('info message');
  });
});
