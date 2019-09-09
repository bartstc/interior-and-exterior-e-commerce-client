import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthForm, Title, InfoText, AuthLink, Error } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { Spinner } from '../../../components/Spinner/Spinner.component';

import { Controls, Control } from '../types';
import { validate } from '../../../utils/validity';
import { signUpControls } from '../../../utils/controls';
import { signUpStart, clearErrors } from '../../../modules/user/user.actions';
import { Store } from '../../../modules/rootReducer';
import {
  selectAuthError,
  selectIsFetching
} from '../../../modules/user/user.selectors';

interface IProps {
  signUpStart: typeof signUpStart;
  clearErrors: typeof clearErrors;
  authError: string | null;
  isFetching: boolean;
}

const _SignUp: React.FC<IProps> = ({
  signUpStart,
  clearErrors,
  authError,
  isFetching
}) => {
  const [controls, setControls] = useState<Controls>(signUpControls);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const { username, email, password } = controls;
  const formValid = username.valid && email.valid && password.valid;

  useEffect(() => {
    if (authError) {
      setErrorMsg(authError);
      setControls(signUpControls);
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
      username: username.value,
      email: email.value,
      password: password.value
    };

    formValid
      ? signUpStart(payload)
      : setErrorMsg('Invalid credentials provided');
  };

  const inputsArray: Control[] = [];
  for (let key in controls) {
    inputsArray.push(controls[key]);
  }

  return (
    <>
      <AuthForm onSubmit={onSubmit}>
        <Title>Sign Up for free</Title>
        <Error showError={errorMsg !== ''}>{errorMsg}</Error>
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

interface SignUpSelection {
  authError: string | null;
  isFetching: boolean;
}

const mapStateToProps = createStructuredSelector<Store, SignUpSelection>({
  authError: selectAuthError,
  isFetching: selectIsFetching
});

export const SignUp = connect(
  mapStateToProps,
  { signUpStart, clearErrors }
)(_SignUp);
