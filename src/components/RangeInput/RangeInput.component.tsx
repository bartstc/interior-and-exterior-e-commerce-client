import React, { ChangeEvent } from 'react';

import { InputWrapper, Label, Info, Input } from './RangeInput.styles';

export interface RangeInputProps {
  name: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  id: string;
  label: string;
  info?: string;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  name,
  value,
  onChange,
  min,
  max,
  id,
  label,
  info
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="range"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        id={id}
      />
      {info && <Info>{info}</Info>}
    </InputWrapper>
  );
};
