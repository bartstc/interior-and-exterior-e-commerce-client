import React from 'react';
import { ButtonWrapper } from './Button.styles';

interface IProps {
  disabled?: boolean;
  onClick?: () => void;
  btnType?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: JSX.Element | string;
}

export const Button: React.FC<IProps> = ({
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
