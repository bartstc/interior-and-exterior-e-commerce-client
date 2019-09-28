import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  SelectListGroup,
  SelectListGroupProps
} from './SelectListGroup.component';

describe('<SelectListGroup />', () => {
  const mockOnChange = jest.fn();

  let props: SelectListGroupProps = {
    name: 'products',
    value: '',
    onChange: mockOnChange,
    options: [
      { description: 'Clocks', amountOfProducts: 2 },
      { description: 'Lamps', amountOfProducts: 3 }
    ],
    id: 'products',
    label: 'Products'
  };

  it('renders correctly', () => {
    const { asFragment } = render(<SelectListGroup {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `onChange` func', () => {
    const { getByTestId } = render(<SelectListGroup {...props} />);
    const input = getByTestId('Select') as HTMLSelectElement;

    fireEvent.change(input, { target: { value: 'Clocks' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  describe('when `error` prop is not empty', () => {
    it('contains `border-bottom: 1px solid red` style rule in `Select` element', () => {
      const { getByTestId } = render(
        <SelectListGroup {...props} error="Error" />
      );
      expect(getByTestId('Select')).toHaveStyle('border-bottom: 1px solid red');
    });

    it('contains `Error` element with correct text inside', () => {
      const { getByTestId } = render(
        <SelectListGroup {...props} error="Error" />
      );
      const error = getByTestId('Error');

      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent('Error');
    });
  });

  it('contains `Info` element with correct text inside when `info` prop is not empty', () => {
    const { getByTestId } = render(<SelectListGroup {...props} info="Info" />);
    const info = getByTestId('Info');

    expect(info).toBeInTheDocument();
    expect(info).toHaveTextContent('Info');
  });
});
