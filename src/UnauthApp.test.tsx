import { render } from '@testing-library/react';
import { _UnauthApp, UnauthAppProps } from './UnauthApp';
import { withProvider } from './utils/testUtils';

const UnauthAppWithProvider = withProvider(_UnauthApp);

describe('<UnauthApp />', () => {
  const props: UnauthAppProps = {
    isAuth: false
  };

  it('renders correctly', () => {
    const { asFragment } = render(UnauthAppWithProvider(props));
    expect(asFragment()).toMatchSnapshot();
  });
});
