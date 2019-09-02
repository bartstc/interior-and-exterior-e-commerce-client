import styled from 'styled-components';

import { color, fontFamily, device } from '../../../utils/styles';

export const Form = styled.form`
  padding: 0 0.5em;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  height: ${(props: { toggled: boolean }) => (props.toggled ? '40px' : '0')};
  transition: height 0.15s ease-in-out;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid ${color.gray};
  width: 100%;
  height: 30px;
  color: ${color.gray};

  &::placeholder {
    color: ${color.gray};
    font-family: ${fontFamily.primary};
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  font-size: 1.4rem;
  margin-left: 0.6em;
  color: ${color.gray};
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 1.7rem;
  }
`;
