import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthForm, Title, AuthLink, InfoText, Error } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { Spinner } from '../../../components/Spinner/Spinner.component';

import { Controls, Control } from '../types';
import { validate } from '../../../utils/validity';
import { signInControls } from '../../../utils/controls';
import {
  selectAuthError,
  selectIsFetching
} from '../../../modules/user/user.selectors';
import { signInStart, clearErrors } from '../../../modules/user/user.actions';
import { Store } from '../../../modules/rootReducer';

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
  const [controls, setControls] = useState<Controls>(signInControls);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const { email, password } = controls;
  const formValid = email.valid && password.valid;

  useEffect(() => {
    if (authError) {
      setErrorMsg(authError);
      setControls(signInControls);
    }

    return () => {
      clearErrors();
    };
  }, [authError, clearErrors]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedControls: Controls = {
      ...controls,
      [e.target.name]: {
        ...controls[e.target.name],
        value: e.target.value,
        valid: validate(
          e.target.value,
          e.target.name,
          controls[e.target.name].validationRules
        ).isValid,
        errorMsg: validate(
          e.target.value,
          e.target.name,
          controls[e.target.name].validationRules
        ).errorMsg,
        touched: true
      }
    };

    setControls(updatedControls);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      email: email.value,
      password: password.value
    };

    signInStart(payload);
  };

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
