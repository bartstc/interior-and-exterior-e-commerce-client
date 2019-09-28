import { render, cleanup, fireEvent } from '@testing-library/react';
import { _HeaderLinks, HeaderLinksProps } from './HeaderLinks.component';
import { withRouter } from '../../../../utils/testUtils';

afterEach(cleanup);

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
    const { getByTestId } = setup(props);
    fireEvent.click(getByTestId('PageLink'));
    expect(mockFetchProductsByType).toBeCalledWith('all');
  });

  it('calls `fetchProductsByType` action with `clocks` arg', () => {
    const { getByTestId } = setup(props);
    fireEvent.click(getByTestId('Clocks'));
    expect(mockFetchProductsByType).toBeCalledWith('clocks');
  });

  describe('when `isAuth` prop is true', () => {
    it('renders `SignOutBtn` element', () => {
      const { getByTestId } = setup({ ...props, isAuth: true });
      expect(getByTestId('SignOutBtn')).toBeInTheDocument();
    });

    it('calls `chekcSession` action', () => {
      const { getByTestId } = setup({ ...props, isAuth: true });
      fireEvent.click(getByTestId('SignOutBtn'));
      expect(mockCheckSession).toHaveBeenCalled();
    });
  });
});
