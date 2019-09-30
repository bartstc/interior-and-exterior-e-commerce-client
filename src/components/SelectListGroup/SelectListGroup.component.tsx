import React, { ChangeEvent } from 'react';

import {
  SelectWrapper,
  Label,
  Select,
  Option,
  Info,
  Error
} from './SelectListGroup.styles';

export interface SelectListGroupProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { description: string; amountOfProducts: number }[];
  id: string;
  label: string;
  error?: string;
  info?: string;
}

export const SelectListGroup: React.FC<SelectListGroupProps> = ({
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
    <Option key={i} value={option.description}>
      {`${option.description}  (${option.amountOfProducts})`}
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
