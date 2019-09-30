import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Backdrop, BackdropProps } from './Backdrop.component';

describe('<Backdrop />', () => {
  const mockHandleClose = jest.fn();

  const props: BackdropProps = {
    show: false,
    handleClose: mockHandleClose
  };

  const setup = (props: BackdropProps) => {
    const utils = render(<Backdrop {...props} />);
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains display:none style rule in `Overlay` element', () => {
    const { getByTestId } = setup(props);
    expect(getByTestId('Overlay')).toHaveStyle('display: none');
  });

  describe('when `show` prop is true', () => {
    beforeEach(() => {
      props.show = true;
    });

    it('contains display:block style rule in `Overlay` element', () => {
      const { getByTestId } = setup(props);
      expect(getByTestId('Overlay')).toHaveStyle('display: block');
    });

    it('calls `handleClose` func', () => {
      const { getByTestId } = setup(props);
      fireEvent.click(getByTestId('Overlay'));
      expect(mockHandleClose).toBeCalledTimes(1);
    });
  });
});
