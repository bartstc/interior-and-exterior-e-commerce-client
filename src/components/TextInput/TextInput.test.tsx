import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput, TextInputProps } from './TextInput.component';

describe('<TextInput />', () => {
  const mockOnChange = jest.fn();

  let props: TextInputProps = {
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

  it('renders correctly', () => {
    const { asFragment } = render(<TextInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `onChange` func', () => {
    const { getByTestId } = render(<TextInput {...props} />);
    const input = getByTestId('Input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'johndoe@gmail.com' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('contains `color:#4ec76e` style rule in `ValidationIcon` element', () => {
    const { getByTestId } = render(<TextInput {...props} />);
    expect(getByTestId('ValidationIcon')).toHaveStyle('color: #4ec76e');
  });

  // in snapshot
  // it('contains correct icon in `ValidationIcon` element when touched=false', () => {
  //   const { getByTestId } = render(<TextInput {...props} />);
  //   expect(getByTestId('ValidationIcon').firstChild).toHaveClass(
  //     'fa-check-circle'
  //   );
  // });

  describe('when `touched` prop is equal to true', () => {
    it('contains `color:#ff4a4a` style rule in `ValidationIcon` element', () => {
      const { getByTestId } = render(<TextInput {...props} touched={true} />);
      expect(getByTestId('ValidationIcon')).toHaveStyle('color: #ff4a4a');
    });

    it('contains `opacity: 1` style rule in `ValidationIcon` element', () => {
      const { getByTestId } = render(<TextInput {...props} touched={true} />);
      expect(getByTestId('ValidationIcon')).toHaveStyle('opacity: 1');
    });

    it('contains correct icon in `ValidationIcon` element', () => {
      const { getByTestId } = render(<TextInput {...props} touched={true} />);
      expect(getByTestId('ValidationIcon').firstChild).toHaveClass(
        'fa-exclamation-circle'
      );
    });
  });

  it('contains correct style rules in `Label` element when `value` prop is not empty', () => {
    const { getByTestId } = render(
      <TextInput {...props} value="johndoe@gmail.com" />
    );
    expect(getByTestId('Label')).toHaveStyle('top: 16px');
    expect(getByTestId('Label')).toHaveStyle('font-size: 12px');
  });

  describe('when `errorMsg` prop is not empty', () => {
    it('contains correct style rules in `Error` element', () => {
      const { getByTestId } = render(
        <TextInput {...props} errorMsg="Invalid email" />
      );
      fireEvent.blur(getByTestId('Input'));

      expect(getByTestId('Error')).toHaveStyle('height: 40px');
      expect(getByTestId('Error')).toHaveStyle('opacity: 1');
    });

    it('contains correct text in `Error` element', () => {
      const { getByTestId } = render(
        <TextInput {...props} errorMsg="Invalid email" />
      );
      expect(getByTestId('Error')).toHaveTextContent('Invalid email');
    });
  });
});
