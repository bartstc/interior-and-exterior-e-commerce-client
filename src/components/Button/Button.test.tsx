import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './Button.component';

describe('<Button />', () => {
  const mockOnClick = jest.fn();

  const props: ButtonProps = {
    onClick: mockOnClick,
    children: 'Submit',
    type: 'button'
  };

  const setup = (props: ButtonProps) => {
    const utils = render(<Button {...props} />);
    const button = utils.container.querySelector('button') as HTMLButtonElement;
    return { ...utils, button };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains disabled attribute', () => {
    const { button } = setup({ ...props, disabled: true });
    expect(button).toHaveAttribute('disabled', '');
  });

  it('calls `onClick` function', () => {
    const { button } = setup(props);
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
  });

  it('contains `dark` class', () => {
    const { button } = setup({ ...props, btnType: 'dark' });
    expect(button).toHaveClass('dark');
  });

  it('contains `submit` type', () => {
    const { button } = setup({ ...props, type: 'submit' });
    expect(button).toHaveAttribute('type', 'submit');
  });
});
