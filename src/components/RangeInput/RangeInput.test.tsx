import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RangeInput, RangeInputProps } from './RangeInput.component';

describe('<RangeInput />', () => {
  const mockOnChange = jest.fn();

  let defaultProps: RangeInputProps = {
    name: 'price',
    value: 0,
    onChange: mockOnChange,
    min: 0,
    max: 100,
    id: 'price',
    label: 'price'
  };

  it('renders correctly', () => {
    const { asFragment } = render(<RangeInput {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `onChange` func', () => {
    const { getByTestId } = render(<RangeInput {...defaultProps} />);
    const input = getByTestId('Input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '50' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('renders `Info` element', () => {
    const { getByTestId } = render(
      <RangeInput {...defaultProps} info="info" />
    );
    const info = getByTestId('Info');

    expect(info).toBeInTheDocument();
    expect(info).toHaveTextContent('info');
  });
});
