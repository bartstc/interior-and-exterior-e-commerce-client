import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthForm, Title, AuthLink, InfoText, Error } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { Spinner } from '../../../components/Spinner/Spinner.component';

import { IControls, IControl } from '../../../interfaces/Control.interface';
import { validate } from '../../../utils/validity';
import { signInControls } from '../utils/controls';
import {
  selectAuthError,
  selectIsFetching
} from '../../../modules/user/user.selectors';
import { signInStart } from '../../../modules/user/user.actions';
import { IStore } from '../../../modules/rootReducer';

interface IProps {
  signInStart: typeof signInStart;
  authError: string | null;
  isFetching: boolean;
}

const _SignIn: React.FC<IProps> = ({ signInStart, authError, isFetching }) => {
  const [controls, setControls] = useState<IControls>(signInControls);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (authError) {
      setErrorMsg(authError);
      setControls(signInControls);
    }
  }, [authError]);

  const { email, password } = controls;
  const validCredentials = email.valid && password.valid;

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
      email: email.value,
      password: password.value
    };

    validCredentials
      ? signInStart(payload)
      : setErrorMsg('Invalid credentials provided');
  };

  const inputsArray: IControl[] = [];
  for (let key in controls) {
    inputsArray.push(controls[key]);
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <Title>Sign In</Title>
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
          Sign In
        </Button>
      )}
      <InfoText>Don't have an account?</InfoText>
      <AuthLink to="/account/register">Register</AuthLink>
    </AuthForm>
  );
};

interface SignInSelection {
  authError: string | null;
  isFetching: boolean;
}

const mapStateToProps = createStructuredSelector<IStore, SignInSelection>({
  authError: selectAuthError,
  isFetching: selectIsFetching
});

export const SignIn = connect(
  mapStateToProps,
  { signInStart }
)(_SignIn);
