import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  SelectListGroup,
  SelectListGroupProps
} from './SelectListGroup.component';

describe('<SelectListGroup />', () => {
  const mockOnChange = jest.fn();

  const props: SelectListGroupProps = {
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

  const setup = (props: SelectListGroupProps) => {
    const utils = render(<SelectListGroup {...props} />);
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `onChange` prop', () => {
    const { container } = setup(props);
    const select = container.querySelector('select') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: 'Clocks' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  describe('when `error` prop is not empty', () => {
    beforeEach(() => {
      props.error = 'error message';
    });

    it('contains `border-bottom: 1px solid red` style rule in `Select` element', () => {
      const { container } = setup(props);
      expect(container.querySelector('select')).toHaveStyle(
        'border-bottom: 1px solid red'
      );
    });

    it('contains `Error` element with correct text inside', () => {
      const { getByText } = setup(props);
      const error = getByText(/error/i);

      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent('error message');
    });
  });

  it('contains `Info` element with correct text inside when `info` prop is not empty', () => {
    const { getByText } = setup({ ...props, info: 'info message' });
    const info = getByText(/info message/i);

    expect(info).toBeInTheDocument();
    expect(info).toHaveTextContent('info message');
  });
});
