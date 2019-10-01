import { render, wait, waitForElement } from '@testing-library/react';
import { _App, AppProps } from './App';
import { withProvider } from './utils/testUtils';

const AppWithProvider = withProvider(_App);

describe('<App />', () => {
  const props: AppProps = {
    isAuth: false
  };

  const setup = (props: AppProps) => {
    const utils = render(AppWithProvider(props));
    return { ...utils };
  };

  it('renders <App /> component', async () => {
    const { asFragment } = setup(props);
    await wait(); // wait for import to be resolved

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders <Spinner /> when `isAuth` prop is null', async () => {
    const { getByTestId } = setup({ ...props, isAuth: null });
    const spinner = await waitForElement(() => getByTestId('Spinner'));

    expect(spinner).toBeInTheDocument();
  });

  it('renders <AuthApp /> when `isAuth` prop is true', async () => {
    const { getByText } = setup({ ...props, isAuth: true });
    await wait();
    const homeLink = getByText(/home/i).closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
  });
});
