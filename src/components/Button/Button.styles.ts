import styled from 'styled-components';

import { color, fontWeight } from '../../utils/styles';

export const ButtonWrapper = styled.button`
  width: 100%;
  border: 1.5px solid ${color.black};
  background: ${color.black};
  color: ${color.white};
  padding: 0.8em 1.9em;
  text-transform: uppercase;
  font-weight: ${fontWeight.semiBold};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: ${color.white};
    color: ${color.black};
  }

  &:disabled {
    border: 1.5px solid ${color.gray};
    background: ${color.gray};
    opacity: 0.55;
    cursor: not-allowed;

    &:hover {
      background: ${color.gray};
      color: ${color.white};
    }
  }
`;
