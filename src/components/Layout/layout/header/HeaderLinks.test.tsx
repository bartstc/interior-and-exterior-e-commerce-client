import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { _HeaderLinks } from './HeaderLinks.component';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe('<HeaderLinks />', () => {
  const mockCheckSession = jest.fn();
  const mockFetchProductsByType = jest.fn();
  let props = {
    isAuth: false,
    cartItemsCount: 2,
    checkSession: mockCheckSession,
    fetchProductsByType: mockFetchProductsByType
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <_HeaderLinks {...props} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // it('contains disabled attribute', () => {
  //   const { getByTestId } = render(<Button disabled={true}>Submit</Button>);
  //   expect(getByTestId('ButtonWrapper')).toHaveAttribute('disabled', '');
  // });

  // it('calls `onClick` function', () => {
  //   const mockOnClick = jest.fn();
  //   const { getByTestId } = render(
  //     <Button onClick={mockOnClick}>Submit</Button>
  //   );
  //   fireEvent.click(getByTestId('ButtonWrapper'));
  //   expect(mockOnClick).toBeCalledTimes(1);
  // });

  // it('contains `dark` class', () => {
  //   const { getByTestId } = render(<Button btnType="dark">Submit</Button>);
  //   expect(getByTestId('ButtonWrapper')).toHaveClass('dark');
  // });

  // it('contains `submit` tyle', () => {
  //   const { getByTestId } = render(<Button type="submit">Submit</Button>);
  //   expect(getByTestId('ButtonWrapper')).toHaveAttribute('type', 'submit');
  // });

  // it('contains `Submit` text', () => {
  //   const { getByTestId } = render(<Button>Submit</Button>);
  //   expect(getByTestId('ButtonWrapper')).toHaveTextContent('Submit');
  // });
});
