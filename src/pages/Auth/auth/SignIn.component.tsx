import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthForm, Title, AuthLink, InfoText, Error } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { Spinner } from '../../../components/Spinner/Spinner.component';

import { Control } from '../types';
import { signInControls } from '../../../utils/controls';
import {
  selectAuthError,
  selectIsFetching
} from '../../../modules/user/user.selectors';
import { signInStart, clearErrors } from '../../../modules/user/user.actions';
import { Store } from '../../../modules/rootReducer';
import { useForm } from '../../../hooks/useForm';

interface SignInSelection {
  authError: string | null;
  isFetching: boolean;
}

export interface SignInProps extends SignInSelection {
  signInStart: typeof signInStart;
  clearErrors: typeof clearErrors;
}

export const _SignIn: React.FC<SignInProps> = ({
  signInStart,
  clearErrors,
  authError,
  isFetching
}) => {
  const { controls, errorMsg, onChange, onSubmit } = useForm(
    signInControls,
    authError,
    clearErrors,
    () => {
      const payload = {
        email: email.value,
        password: password.value
      };

      signInStart(payload);
    }
  );

  const { email, password } = controls;
  const formValid = email.valid && password.valid;

  const inputsArray: Control[] = [];
  for (let key in controls) {
    inputsArray.push(controls[key]);
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <Title>Sign In</Title>
      <Error data-testid="Error" showError={errorMsg !== ''}>
        {errorMsg}
      </Error>
      {inputsArray.map(({ id, valid, validationRules, ...otherProps }) => (
        <TextInput
          key={id}
          id={id}
          invalid={!valid}
          shouldValidate={validationRules}
          onChange={onChange}
          {...otherProps}
        />
      ))}
      {isFetching ? (
        <Spinner />
      ) : (
        <Button disabled={!formValid} type="submit">
          Sign In
        </Button>
      )}
      <InfoText>Don't have an account?</InfoText>
      <AuthLink to="/account/register">Register</AuthLink>
    </AuthForm>
  );
};

const mapStateToProps = createStructuredSelector<Store, SignInSelection>({
  authError: selectAuthError,
  isFetching: selectIsFetching
});

export const SignIn = connect(
  mapStateToProps,
  { signInStart, clearErrors }
)(_SignIn);
