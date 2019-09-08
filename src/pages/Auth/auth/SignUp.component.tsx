import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthForm, Title, InfoText, AuthLink, Error } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { Spinner } from '../../../components/Spinner/Spinner.component';

import { IControls, IControl } from '../../../interfaces/Control.interface';
import { validate } from '../../../utils/validity';
import { signUpControls } from '../utils/controls';
import { signUpStart } from '../../../modules/user/user.actions';
import { IStore } from '../../../modules/rootReducer';
import {
  selectAuthError,
  selectIsFetching
} from '../../../modules/user/user.selectors';

interface IProps {
  signUpStart: typeof signUpStart;
  authError: string | null;
  isFetching: boolean;
}

const _SignUp: React.FC<IProps> = ({ signUpStart, authError, isFetching }) => {
  const [controls, setControls] = useState<IControls>(signUpControls);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (authError) {
      setErrorMsg(authError);
      setControls(signUpControls);
    }
  }, [authError]);

  const { username, email, password } = controls;
  const validCredentials = username.valid && email.valid && password.valid;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedControls: IControls = {
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

    validCredentials
      ? signUpStart(payload)
      : setErrorMsg('Invalid credentials provided');
  };

  const inputsArray: IControl[] = [];
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
          <Button disabled={!validCredentials} type="submit">
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

const mapStateToProps = createStructuredSelector<IStore, SignUpSelection>({
  authError: selectAuthError,
  isFetching: selectIsFetching
});

export const SignUp = connect(
  mapStateToProps,
  { signUpStart }
)(_SignUp);
