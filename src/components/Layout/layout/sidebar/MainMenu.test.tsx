import { render, fireEvent } from '@testing-library/react';
import { _MainMenu, MainMenuProps } from './MainMenu.component';
import { withRouter } from '../../../../utils/testUtils';

const MainMenuWithRouter = withRouter(_MainMenu);

describe('<CollectionsMenu />', () => {
  const mockHandleCloseSidebar = jest.fn();
  const mockOpenInterior = jest.fn();
  const mockOpenExterior = jest.fn();
  const mockCheckSession = jest.fn();

  const props: MainMenuProps = {
    isAuth: false,
    cartItemsCount: 2,
    showSidebar: false,
    handleCloseSidebar: mockHandleCloseSidebar,
    openInterior: mockOpenInterior,
    openExterior: mockOpenExterior,
    checkSession: mockCheckSession
  };

  const setup = (props: MainMenuProps) => {
    const utils = render(MainMenuWithRouter(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `handleCloseSidebar` func', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Home'));
    fireEvent.click(getByText('Account'));
    fireEvent.click(getByText('Cart (2)'));

    expect(mockHandleCloseSidebar).toHaveBeenCalledTimes(3);
  });

  it('calls `openInterior` func', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Interior'));

    expect(mockOpenInterior).toHaveBeenCalled();
  });

  it('calls `openExterior` func', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Exterior'));

    expect(mockOpenExterior).toHaveBeenCalled();
  });

  describe('when `isAuth` prop is true', () => {
    beforeEach(() => {
      props.isAuth = true;
    });

    it('contains `Logout` btn', () => {
      const { getByText } = setup(props);
      expect(getByText('Logout')).toBeInTheDocument();
    });

    it('calls `checkSession` action', () => {
      const { getByText } = setup(props);
      fireEvent.click(getByText('Logout'));

      expect(mockCheckSession).toHaveBeenCalled();
    });
  });
});
