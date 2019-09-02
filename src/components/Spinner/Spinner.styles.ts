import styled from 'styled-components';

import { color } from '../../utils/styles';

export const Loader = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;

  &:after {
    content: ' ';
    display: block;
    margin: 0 auto;
    width: 28px;
    height: 28px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${color.black};
    border-color: ${color.black} transparent ${color.black} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
