import React, { ChangeEvent, useState } from 'react';

import {
  Wrapper,
  Input,
  Label,
  Error,
  ValidationIcon
} from './TextInput.styles';

export interface TextInputProps {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  label: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  // validation props
  errorMsg: string;
  touched: boolean;
  invalid: boolean;
  shouldValidate: {} | null;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  id,
  placeholder,
  value,
  label,
  type = 'text',
  onChange,
  errorMsg,
  touched,
  invalid,
  shouldValidate
}) => {
  const [showError, setShowError] = useState<boolean>(false);

  let isInvalid = null;
  if (invalid && shouldValidate && touched) isInvalid = true;

  const checkIfError = () => {
    if (errorMsg) setShowError(true);
  };

  return (
    <Wrapper>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={checkIfError}
      />
      <ValidationIcon
        data-testid="ValidationIcon"
        isInvalid={isInvalid}
        touched={touched}
      >
        {isInvalid ? (
          <i className="fas fa-exclamation-circle"></i>
        ) : (
          <i className="fas fa-check-circle"></i>
        )}
      </ValidationIcon>
      <Label shrink={value.length ? true : false} htmlFor={id}>
        {label}
      </Label>
      <Error showError={showError && invalid && errorMsg !== ''}>
        {errorMsg}
      </Error>
    </Wrapper>
  );
};
