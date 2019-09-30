import { render, within, wait, waitForElement } from '@testing-library/react';
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

  it('renders <UnauthApp /> component', async () => {
    const { asFragment } = setup(props);
    await wait(); // wait for import to be resolved

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders <Spinner /> when `isAuth` prop is null', async () => {
    const { container } = setup({ ...props, isAuth: null });
    const spinner = await waitForElement(() =>
      within(container).getByTestId('Spinner')
    );

    expect(spinner).toBeInTheDocument();
  });

  // it('renders <AuthApp /> when `isAuth` prop is true', async () => {
  //   const { container, debug } = setup({ ...props, isAuth: true });
  //   await wait();
  //   debug();

  //   const authApp = within(container).getByText(/logout/i);
  //   expect(authApp).toBeInTheDocument();
  // });
});
