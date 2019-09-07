import React, { useState, ChangeEvent, FormEvent } from 'react';

import { AuthForm, Title, InfoText, AuthLink } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { IControls, IControl } from '../../../interfaces/Control.interface';
import { validate } from '../../../utils/validity';
import { signUpControls } from '../utils/controls';

export const SignUp: React.FC = () => {
  const [controls, setControls] = useState<IControls>(signUpControls);

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

    console.log(controls);
  };

  const inputsArray: IControl[] = [];
  for (let key in controls) {
    inputsArray.push(controls[key]);
  }

  return (
    <AuthForm onSubmit={onSubmit}>
      <Title>Sign Up for free</Title>
      {inputsArray.map(({ valid, validationRules, ...otherProps }) => (
        <TextInput
          invalid={!valid}
          shouldValidate={validationRules}
          onChange={onChange}
          {...otherProps}
        />
      ))}
      <Button type="submit">Sign Up</Button>
      <InfoText>Do you already have an account?</InfoText>
      <AuthLink to="/account">Sign In</AuthLink>
    </AuthForm>
  );
};
