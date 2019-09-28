import { render, fireEvent } from '@testing-library/react';
import { Header, HeaderProps } from './Header.component';
import { withProvider } from '../../../utils/testUtils';

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
    const { getByTitle } = setup(props);
    fireEvent.click(getByTitle('Menu'));

    expect(mockHandleOpen).toHaveBeenCalledTimes(1);
  });

  it('calls `toggleSearchForm` func', () => {
    const { getByTitle } = setup(props);
    fireEvent.click(getByTitle('Search'));

    expect(mockToggleSearchForm).toHaveBeenCalledTimes(1);
  });
});
