import styled from 'styled-components';

import { color, fontWeight } from '../../utils/styles';

interface ILabelProps {
  shrink: boolean;
}

interface IIconProps {
  isInvalid: boolean | null;
  touched: boolean;
}

interface IErrorProps {
  showError: boolean;
}

export const Wrapper = styled.p`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  color: ${color.gray};
  font-weight: ${fontWeight.regular};
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: ${(props: ILabelProps) => (props.shrink ? '16px' : '42px')};
  font-size: ${(props: ILabelProps) => (props.shrink ? '12px' : '.9rem')};
  transition: 300ms ease all;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 5px;
  padding-right: 50px;
  border: none;
  border-bottom: 1px solid ${color.gray};
  font-size: 1rem;
  background: none;
  color: ${color.gray};
  margin-top: 30px;
  margin-bottom: 7px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    top: 16px;
    font-size: 12px;
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const ValidationIcon = styled.span`
  display: block;
  opacity: ${(props: IIconProps) => (props.touched ? '1' : '0')};
  transition: all 0.25s ease-in-out;
  position: absolute;
  top: 39px;
  right: 0;
  font-size: 1.4rem;
  color: ${(props: IIconProps) =>
    props.isInvalid === true ? '#ff4a4a' : '#4ec76e'};
`;

export const Error = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.white};
  line-height: 40px;
  width: 100%;
  background: #ff4a4a;
  padding: 0 0.9em;
  border-radius: 11px;
  height: ${(props: IErrorProps) => (props.showError ? '40px' : '0')};
  opacity: ${(props: IErrorProps) => (props.showError ? '1' : '0')};
  transition: all 0.15s ease-in-out;
`;
