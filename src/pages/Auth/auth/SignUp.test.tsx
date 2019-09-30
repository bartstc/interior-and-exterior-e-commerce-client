import { render, fireEvent } from '@testing-library/react';
import { withRouter } from '../../../utils/testUtils';
import { _SignUp, SignUpProps } from './SignUp.component';

const SignUpWithRouter = withRouter(_SignUp);

describe('<SignUp', () => {
  const mockSignUpStart = jest.fn();
  const mockClearErrors = jest.fn();

  const props: SignUpProps = {
    signUpStart: mockSignUpStart,
    clearErrors: mockClearErrors,
    authError: null,
    isFetching: false
  };

  const setup = (props: SignUpProps) => {
    const utils = render(SignUpWithRouter(props));
    const form = utils.container.querySelector('form') as HTMLFormElement;
    const usernameInput = utils.getByLabelText(
      'Enter username'
    ) as HTMLInputElement;
    const emailInput = utils.getByLabelText('Enter email') as HTMLInputElement;
    const passwordInput = utils.getByLabelText(
      'Enter password'
    ) as HTMLInputElement;
    const error = utils.getByTestId('Error');

    return { ...utils, form, usernameInput, emailInput, passwordInput, error };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('when `authError` prop is not null', () => {
    it('`Error` element contains correct style rules', () => {
      const { error, rerender } = setup(props);
      rerender(
        SignUpWithRouter({ ...props, authError: 'Invalid credentials' })
      );

      expect(error).toHaveStyle('height: 40px');
      expect(error).toHaveStyle('opacity: 1');
    });

    it('`Error` element contains correct text', () => {
      const { getByText, rerender } = setup(props);
      rerender(
        SignUpWithRouter({ ...props, authError: 'Invalid credentials' })
      );

      expect(getByText('Invalid credentials')).toBeInTheDocument();
    });
  });

  it('calls `SignUpStart` action after submit', () => {
    const { usernameInput, emailInput, passwordInput, form } = setup(props);
    fireEvent.change(usernameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'John123$' } });
    fireEvent.submit(form);

    expect(mockSignUpStart).toHaveBeenCalledTimes(1);
  });

  describe('when credentials are invalid', () => {
    it('disable a submit button', () => {
      const { usernameInput, emailInput, passwordInput, container } = setup(
        props
      );
      fireEvent.change(usernameInput, { target: { value: 'a' } });
      fireEvent.change(emailInput, { target: { value: 'johndoe' } });
      fireEvent.change(passwordInput, { target: { value: 'a' } });

      expect(container.querySelector('button[type="submit"]')).toHaveAttribute(
        'disabled',
        ''
      );
    });
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
