import React, { ChangeEvent } from 'react';

import {
  SelectWrapper,
  Label,
  Select,
  Option,
  Info,
  Error
} from './SelectListGroup.styles';

interface IProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  id: string;
  label: string;
  error?: string;
  info?: string;
}

export const SelectListGroup: React.FC<IProps> = ({
  name,
  value,
  onChange,
  options,
  id,
  label,
  error,
  info
}) => {
  const selectOptions = options.map((option, i) => (
    <Option key={i} value={option.value}>
      {option.label}
    </Option>
  ));

  return (
    <SelectWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Select
        error={error}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </Select>
      {info && <Info>{info}</Info>}
      {error && <Error>{error}</Error>}
    </SelectWrapper>
  );
};
