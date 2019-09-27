import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { SideDrawer, SideDrawerProps } from './SideDrawer.component';

afterEach(cleanup);

describe('<SideDrawer />', () => {
  const mockHandleClose = jest.fn();

  let props: SideDrawerProps = {
    toggled: false,
    zIndex: 1,
    title: 'Title',
    handleClose: mockHandleClose,
    children: <span>test</span>
  };

  it('renders correctly', () => {
    const { asFragment } = render(<SideDrawer {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains correct style rules in `Wrapper` element', () => {
    const { getByTestId } = render(
      <SideDrawer {...props} toggled={true} zIndex={2} />
    );
    const wrapper = getByTestId('Wrapper');

    expect(wrapper).toHaveStyle('z-index: 2');
    expect(wrapper).toHaveStyle('transform: translateX(0)');
  });

  it('calls `handleClose` func', () => {
    const { getByTestId } = render(<SideDrawer {...props} />);
    const btn = getByTestId('CloseBtn');

    fireEvent.click(btn);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
