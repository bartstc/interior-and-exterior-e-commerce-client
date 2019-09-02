import React, { useState, ChangeEvent, FormEvent } from 'react';

import { AuthForm, Title, AuthLink, InfoText } from '../Auth.styles';

import { Button } from '../../../components/Button/Button.component';
import { TextInput } from '../../../components/TextInput/TextInput.component';
import { IControls, IControl } from '../../../interfaces/Control.interface';
import { validate } from '../../../utils/validity';

const signInControls: IControls = {
  email: {
    label: 'Enter email',
    placeholder: '',
    type: 'email',
    id: 'signup-email',
    name: 'email',
    value: '',
    validationRules: {
      required: true,
      isEmail: true
    },
    valid: false,
    touched: false,
    errorMsg: ''
  },
  password: {
    label: 'Enter password',
    placeholder: '',
    type: 'password',
    id: 'signup-password',
    name: 'password',
    value: '',
    validationRules: {
      required: true
    },
    valid: false,
    touched: false,
    errorMsg: ''
  }
};

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
      {inputsArray.map(
        ({
          label,
          placeholder,
          type,
          id,
          name,
          value,
          valid,
          touched,
          validationRules,
          errorMsg
        }) => (
          <TextInput
            key={id}
            label={label}
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            invalid={!valid}
            touched={touched}
            shouldValidate={validationRules}
            errorMsg={errorMsg}
          />
        )
      )}
      <Button type="submit">Sign In</Button>
      <InfoText>Don't have an account?</InfoText>
      <AuthLink to="/account/register">Register</AuthLink>
    </AuthForm>
  );
};
