import { render, fireEvent } from '@testing-library/react';
import { _HeaderLinks, HeaderLinksProps } from './HeaderLinks.component';
import { withRouter } from '../../../../utils/testUtils';

const HeaderLinksWithRouter = withRouter(_HeaderLinks);

describe('<HeaderLinks />', () => {
  const mockCheckSession = jest.fn();
  const mockFetchProductsByType = jest.fn();

  const props: HeaderLinksProps = {
    isAuth: false,
    cartItemsCount: 2,
    checkSession: mockCheckSession,
    fetchProductsByType: mockFetchProductsByType
  };

  const setup = (props: HeaderLinksProps) => {
    const utils = render(HeaderLinksWithRouter(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `fetchProductsByType` action with `all` arg', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Products'));
    expect(mockFetchProductsByType).toBeCalledWith('all');
  });

  it('calls `fetchProductsByType` action with `clocks` arg', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Clocks'));
    expect(mockFetchProductsByType).toBeCalledWith('clocks');
  });

  describe('when `isAuth` prop is true', () => {
    beforeEach(() => {
      props.isAuth = true;
    });

    it('renders `SignOutBtn` element', () => {
      const { getByText } = setup(props);
      expect(getByText('Logout')).toBeInTheDocument();
    });

    it('calls `chekcSession` action', () => {
      const { getByText } = setup(props);
      fireEvent.click(getByText('Logout'));
      expect(mockCheckSession).toHaveBeenCalled();
    });
  });
});
