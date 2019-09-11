import styled from 'styled-components';

import { fontWeight, color, fontFamily, device } from '../../utils/styles';

interface ISelectProps {
  error?: string;
}

export const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.3em;

  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${fontWeight.semiBold};
  text-align: start;
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 0.3em;
  height: 36px;
  border: none;
  border-bottom: ${(props: ISelectProps) =>
    props.error ? '1px solid red' : `1px solid #ccc`};
  color: ${color.gray};
  outline-color: ${color.gray};
  font-family: ${fontFamily.primary};
  text-transform: capitalize;
`;

export const Option = styled.option`
  width: 100%;
  font-family: ${fontFamily.primary};
  font-size: 1.1rem;
  color: ${color.black};
  text-transform: capitalize;

  &::placeholder {
    color: ${color.gray};
  }

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background: ${color.black};
    color: ${color.white};
  }
`;

export const Error = styled.span`
  margin-top: 0.2em;
  font-size: 0.8rem;
  color: red;
`;

export const Info = styled.span`
  margin-top: 0.2em;
  font-size: 0.8rem;
`;
