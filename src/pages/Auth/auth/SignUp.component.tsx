import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthForm, Title, InfoText, AuthLink, Error } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { Spinner } from '../../../components/Spinner/Spinner.component';

import { Control } from '../types';
import { signUpControls } from '../../../utils/controls';
import { signUpStart, clearErrors } from '../../../modules/user/user.actions';
import { Store } from '../../../modules/rootReducer';
import {
  selectAuthError,
  selectIsFetching
} from '../../../modules/user/user.selectors';
import { useForm } from '../../../hooks/useForm';

interface SignUpSelection {
  authError: string | null;
  isFetching: boolean;
}

export interface SignUpProps extends SignUpSelection {
  signUpStart: typeof signUpStart;
  clearErrors: typeof clearErrors;
}

export const _SignUp: React.FC<SignUpProps> = ({
  signUpStart,
  clearErrors,
  authError,
  isFetching
}) => {
  const { controls, errorMsg, onChange, onSubmit } = useForm(
    signUpControls,
    authError,
    clearErrors,
    () => {
      const payload = {
        username: username.value,
        email: email.value,
        password: password.value
      };

      signUpStart(payload);
    }
  );

  const { username, email, password } = controls;
  const formValid = username.valid && email.valid && password.valid;

  const inputsArray: Control[] = [];
  for (let key in controls) {
    inputsArray.push(controls[key]);
  }

  return (
    <>
      <AuthForm onSubmit={onSubmit}>
        <Title>Sign Up for free</Title>
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
            Sign Up
          </Button>
        )}
        <InfoText>Do you already have an account?</InfoText>
        <AuthLink to="/account">Sign In</AuthLink>
      </AuthForm>
    </>
  );
};

const mapStateToProps = createStructuredSelector<Store, SignUpSelection>({
  authError: selectAuthError,
  isFetching: selectIsFetching
});

export const SignUp = connect(
  mapStateToProps,
  { signUpStart, clearErrors }
)(_SignUp);
