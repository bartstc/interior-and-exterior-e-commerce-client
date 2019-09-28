import React from 'react';
import { render } from '@testing-library/react';
import { Layout, LayoutProps } from './Layout.component';
import { withProvider } from '../../utils/testUtils';

const LayoutWithProvider = withProvider(Layout);

describe('<Sidebar />', () => {
  const props: LayoutProps = {
    children: <span>Layout</span>
  };

  const setup = (props: any) => {
    const utils = render(LayoutWithProvider(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });
});
