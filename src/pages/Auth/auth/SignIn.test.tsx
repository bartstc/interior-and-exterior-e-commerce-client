import { render, fireEvent } from '@testing-library/react';
import { withRouter } from '../../../utils/testUtils';
import { _SignIn, SignInProps } from './SignIn.component';

const SignInWithRouter = withRouter(_SignIn);

describe('<SignIn', () => {
  const mockSignInStart = jest.fn();
  const mockClearErrors = jest.fn();

  const props: SignInProps = {
    signInStart: mockSignInStart,
    clearErrors: mockClearErrors,
    authError: null,
    isFetching: false
  };

  const setup = (props: SignInProps) => {
    const utils = render(SignInWithRouter(props));
    const form = utils.container.querySelector('form') as HTMLFormElement;
    const emailInput = utils.getByLabelText('Enter email') as HTMLInputElement;
    const passwordInput = utils.getByLabelText(
      'Enter password'
    ) as HTMLInputElement;
    const submitButton = utils.container.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    const error = utils.getByTestId('Error');

    return { ...utils, form, emailInput, passwordInput, submitButton, error };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('when `authError` prop is not null', () => {
    it('`Error` element contains correct style rules', () => {
      const { error, rerender } = setup(props);
      rerender(
        SignInWithRouter({ ...props, authError: 'Invalid credentials' })
      );

      expect(error).toHaveStyle('height: 40px');
      expect(error).toHaveStyle('opacity: 1');
    });

    it('`Error` element contains correct text', () => {
      const { getByText, rerender } = setup(props);
      rerender(
        SignInWithRouter({ ...props, authError: 'Invalid credentials' })
      );

      expect(getByText('Invalid credentials')).toBeInTheDocument();
    });
  });

  it('calls `SignInStart` action after submit', () => {
    const { emailInput, passwordInput, form } = setup(props);
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'John123$' } });
    fireEvent.submit(form);

    expect(mockSignInStart).toHaveBeenCalledTimes(1);
  });

  it('contains a disabled button until credentials are valid', () => {
    const { emailInput, passwordInput, submitButton } = setup(props);
    fireEvent.change(emailInput, { target: { value: 'johndoe' } });
    fireEvent.change(passwordInput, { target: { value: 'a' } });

    expect(submitButton.disabled).toEqual(true);

    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'John123$' } });

    expect(submitButton.disabled).toEqual(false);
  });

  it('contains `Spinner` element when `isFetching` prop is true', () => {
    const { getByTestId } = setup({ ...props, isFetching: true });
    expect(getByTestId('Spinner')).toBeInTheDocument();
  });

  it('calls `clearErrors` action when component is unmounted', () => {
    const { unmount } = setup(props);
    unmount();

    expect(mockClearErrors).toHaveBeenCalled();
  });
});
