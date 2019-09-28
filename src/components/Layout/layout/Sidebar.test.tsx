import { render } from '@testing-library/react';
import { Sidebar, SidebarProps } from './Sidebar.component';
import { withProvider } from '../../../utils/testUtils';

const SidebarWithProvider = withProvider(Sidebar);

describe('<Sidebar />', () => {
  const mockHandleCloseSidebar = jest.fn();

  const props: SidebarProps = {
    showSidebar: false,
    handleCloseSidebar: mockHandleCloseSidebar
  };

  const setup = (props: any) => {
    const utils = render(SidebarWithProvider(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });
});
