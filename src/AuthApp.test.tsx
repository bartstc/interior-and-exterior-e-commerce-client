import { render } from '@testing-library/react';
import { AuthApp } from './AuthApp';
import { withProvider } from './utils/testUtils';
import { createMemoryHistory } from 'history';

const AuthAppWithProvider = withProvider(AuthApp);

// https://testing-library.com/docs/example-react-router
describe('<AuthApp />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(AuthAppWithProvider({}));
    const history = createMemoryHistory();
    history.push('/account');

    expect(asFragment()).toMatchSnapshot();
  });
});
