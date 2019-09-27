import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { _HeaderLinks, HeaderLinksProps } from './HeaderLinks.component';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

const withRouter = (Component: any) => (props: any) => (
  <Router>
    <Component {...props} />
  </Router>
);

const HeaderLinksWithRouter = withRouter(_HeaderLinks);

describe('<HeaderLinks />', () => {
  const mockCheckSession = jest.fn();
  const mockFetchProductsByType = jest.fn();

  let props: HeaderLinksProps = {
    isAuth: false,
    cartItemsCount: 2,
    checkSession: mockCheckSession,
    fetchProductsByType: mockFetchProductsByType
  };

  it('renders correctly', () => {
    const { asFragment } = render(HeaderLinksWithRouter(props));
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `fetchProductsByType` action with `all` arg', () => {
    const { getByTestId } = render(HeaderLinksWithRouter(props));
    fireEvent.click(getByTestId('PageLink'));
    expect(mockFetchProductsByType).toBeCalledWith('all');
  });

  it('calls `fetchProductsByType` action with `clocks` arg', () => {
    const { getByTestId } = render(HeaderLinksWithRouter(props));
    fireEvent.click(getByTestId('Clocks'));
    expect(mockFetchProductsByType).toBeCalledWith('clocks');
  });

  it('renders `SignOutBtn` when user is authenticated', () => {
    const { getByTestId } = render(
      HeaderLinksWithRouter({ ...props, isAuth: true })
    );
    expect(getByTestId('SignOutBtn')).toBeInTheDocument();
  });

  it('calls `chekcSession` action', () => {
    const { getByTestId } = render(
      HeaderLinksWithRouter({ ...props, isAuth: true })
    );
    fireEvent.click(getByTestId('SignOutBtn'));
    expect(mockCheckSession).toHaveBeenCalled();
  });
});
