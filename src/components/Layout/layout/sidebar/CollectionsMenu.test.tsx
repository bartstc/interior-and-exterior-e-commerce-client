import { render, fireEvent } from '@testing-library/react';
import {
  _CollectionsMenu,
  CollectionsMenuProps
} from './CollectionsMenu.compnent';
import { withRouter } from '../../../../utils/testUtils';

const CollectionMenuWithRouter = withRouter(_CollectionsMenu);

describe('<CollectionsMenu />', () => {
  const mockCloseInterior = jest.fn();
  const mockCloseExterior = jest.fn();
  const mockHandleCloseMenu = jest.fn();
  const mockFetchProductsByType = jest.fn();

  const props: CollectionsMenuProps = {
    showInterior: false,
    showExterior: false,
    closeInterior: mockCloseInterior,
    closeExterior: mockCloseExterior,
    handleCloseMenu: mockHandleCloseMenu,
    fetchProductsByType: mockFetchProductsByType
  };

  const setup = (props: CollectionsMenuProps) => {
    const utils = render(CollectionMenuWithRouter(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `handleCloseMenu` func', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Clocks'));

    expect(mockHandleCloseMenu).toHaveBeenCalledTimes(1);
  });

  it('calls `fetchProductsByType` action with `clocks` arg', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Clocks'));

    expect(mockFetchProductsByType).toBeCalledWith('clocks');
  });
});
