import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SideDrawer, SideDrawerProps } from './SideDrawer.component';

describe('<SideDrawer />', () => {
  const mockHandleClose = jest.fn();

  const props: SideDrawerProps = {
    toggled: false,
    zIndex: 1,
    title: 'Title',
    handleClose: mockHandleClose,
    children: <span>test</span>
  };

  const setup = (props: SideDrawerProps) => {
    const utils = render(<SideDrawer {...props} />);
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains correct style rules in `Wrapper` element', () => {
    const { getByTestId } = setup({ ...props, toggled: true, zIndex: 2 });
    const wrapper = getByTestId('Wrapper');

    expect(wrapper).toHaveStyle('z-index: 2');
    expect(wrapper).toHaveStyle('transform: translateX(0)');
  });

  it('calls `handleClose` prop', () => {
    const { getByLabelText } = setup(props);
    const btn = getByLabelText('close');

    fireEvent.click(btn);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
