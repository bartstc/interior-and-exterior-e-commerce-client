import React from 'react';

import { ButtonWrapper } from './Button.styles';

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  btnType?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: any;
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  btnType,
  type = 'button',
  children
}) => (
  <ButtonWrapper
    disabled={disabled}
    onClick={onClick}
    className={[btnType].join(' ')}
    type={type}
  >
    {children}
  </ButtonWrapper>
);
