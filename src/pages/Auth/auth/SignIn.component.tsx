import React, { useState, ChangeEvent, FormEvent } from 'react';

import { AuthForm, Title, AuthLink, InfoText } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { IControls, IControl } from '../../../interfaces/Control.interface';
import { validate } from '../../../utils/validity';
import { signInControls } from '../utils/controls';

export const SignIn: React.FC = () => {
  const [controls, setControls] = useState<IControls>(signInControls);

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
      <Title>Sign In</Title>
      {inputsArray.map(({ valid, validationRules, ...otherProps }) => (
        <TextInput
          invalid={!valid}
          shouldValidate={validationRules}
          onChange={onChange}
          {...otherProps}
        />
      ))}
      <Button type="submit">Sign In</Button>
      <InfoText>Don't have an account?</InfoText>
      <AuthLink to="/account/register">Register</AuthLink>
    </AuthForm>
  );
};
