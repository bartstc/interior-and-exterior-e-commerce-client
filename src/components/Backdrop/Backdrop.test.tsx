import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Backdrop } from './Backdrop.component';

afterEach(cleanup);

describe('<Backdrop />', () => {
  const mockHandleClose = jest.fn();
  let props = {
    show: false,
    handleClose: mockHandleClose
  };

  it('renders correctly', () => {
    const { asFragment } = render(<Backdrop {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains display:none style rule in `Overlay` element', () => {
    const { getByTestId } = render(<Backdrop {...props} />);
    expect(getByTestId('Overlay')).toHaveStyle('display: none');
  });

  it('contains display:block style rule in `Overlay` element', () => {
    const { getByTestId } = render(<Backdrop {...props} show={true} />);
    expect(getByTestId('Overlay')).toHaveStyle('display: block');
  });

  it('calls `handleClose` function', () => {
    const { getByTestId } = render(<Backdrop {...props} show={true} />);
    fireEvent.click(getByTestId('Overlay'));
    expect(mockHandleClose).toBeCalledTimes(1);
  });
});
