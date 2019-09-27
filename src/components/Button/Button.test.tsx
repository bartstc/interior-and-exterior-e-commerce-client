import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from './Button.component';

afterEach(cleanup);

describe('<Button />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Button>Submit</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains disabled attribute', () => {
    const { getByTestId } = render(<Button disabled={true}>Submit</Button>);
    expect(getByTestId('ButtonWrapper')).toHaveAttribute('disabled', '');
  });

  it('calls `onClick` function', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={mockOnClick}>Submit</Button>
    );
    fireEvent.click(getByTestId('ButtonWrapper'));
    expect(mockOnClick).toBeCalledTimes(1);
  });

  it('contains `dark` class', () => {
    const { getByTestId } = render(<Button btnType="dark">Submit</Button>);
    expect(getByTestId('ButtonWrapper')).toHaveClass('dark');
  });

  it('contains `submit` tyle', () => {
    const { getByTestId } = render(<Button type="submit">Submit</Button>);
    expect(getByTestId('ButtonWrapper')).toHaveAttribute('type', 'submit');
  });

  it('contains `Submit` text', () => {
    const { getByTestId } = render(<Button>Submit</Button>);
    expect(getByTestId('ButtonWrapper')).toHaveTextContent('Submit');
  });
});
