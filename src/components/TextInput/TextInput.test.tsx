import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput, TextInputProps } from './TextInput.component';

describe('<TextInput />', () => {
  const mockOnChange = jest.fn();

  const props: TextInputProps = {
    name: 'email',
    id: 'email',
    placeholder: '',
    value: '',
    label: 'Enter email',
    type: 'email',
    onChange: mockOnChange,
    errorMsg: '',
    touched: false,
    invalid: true,
    shouldValidate: {
      required: true,
      isEmail: true
    }
  };

  const setup = (props: TextInputProps) => {
    const utils = render(<TextInput {...props} />);
    const validationIcon = utils.getByTestId('ValidationIcon');
    const input = utils.container.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;

    return { ...utils, validationIcon, input };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `onChange` func', () => {
    const { input } = setup(props);

    fireEvent.change(input, { target: { value: 'johndoe@gmail.com' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('contains `color:#4ec76e` style rule in `ValidationIcon` element', () => {
    const { validationIcon } = setup(props);
    expect(validationIcon).toHaveStyle('color: #4ec76e');
  });

  describe('when `touched` prop is equal to true', () => {
    beforeEach(() => {
      props.touched = true;
    });

    it('contains `color:#ff4a4a` style rule in `ValidationIcon` element', () => {
      const { validationIcon } = setup(props);
      expect(validationIcon).toHaveStyle('color: #ff4a4a');
    });

    it('contains `opacity: 1` style rule in `ValidationIcon` element', () => {
      const { validationIcon } = setup(props);
      expect(validationIcon).toHaveStyle('opacity: 1');
    });

    it('contains correct icon in `ValidationIcon` element', () => {
      const { validationIcon } = setup(props);
      expect(validationIcon.firstChild).toHaveClass('fa-exclamation-circle');
    });
  });

  it('contains correct style rules in `Label` element when `value` prop is not empty', () => {
    const { container } = setup({ ...props, value: 'johndoe@gmail.com' });
    const label = container.querySelector('label');

    expect(label).toHaveStyle('top: 16px');
    expect(label).toHaveStyle('font-size: 12px');
  });

  describe('when `errorMsg` prop is not empty', () => {
    beforeEach(() => {
      props.errorMsg = 'Invalid email';
    });

    it('contains correct style rules in `Error` element', () => {
      const { input, getByText } = setup(props);
      fireEvent.blur(input);

      expect(getByText(/invalid email/i)).toHaveStyle('height: 40px');
      expect(getByText(/invalid email/i)).toHaveStyle('opacity: 1');
    });

    it('contains correct text in `Error` element', () => {
      const { getByText } = setup(props);
      expect(getByText(/invalid email/i)).toBeInTheDocument();
    });
  });
});
