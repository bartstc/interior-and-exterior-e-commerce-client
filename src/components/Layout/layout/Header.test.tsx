import { render, cleanup, fireEvent } from '@testing-library/react';
import { Header, HeaderProps } from './Header.component';
import { withProvider } from '../../../utils/testUtils';

beforeEach(cleanup);

const HeaderWithProvider = withProvider(Header);

describe('<Header />', () => {
  const mockHandleOpen = jest.fn();
  const mockToggleSearchForm = jest.fn();

  const props: HeaderProps = {
    handleOpen: mockHandleOpen,
    toggleSearchForm: mockToggleSearchForm
  };

  const setup = (props: HeaderProps) => {
    const utils = render(HeaderWithProvider(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `handleOpen` func', () => {
    const { getByTestId } = setup(props);
    fireEvent.click(getByTestId('Hamburger'));

    expect(mockHandleOpen).toHaveBeenCalledTimes(1);
  });

  it('calls `toggleSearchForm` func', () => {
    const { getByTestId } = setup(props);
    fireEvent.click(getByTestId('SearchBtn'));

    expect(mockToggleSearchForm).toHaveBeenCalledTimes(1);
  });
});
