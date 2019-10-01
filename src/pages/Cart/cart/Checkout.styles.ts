import styled from 'styled-components';

import { fontWeight, color, device } from '../../../utils/styles';

export const CheckoutWrapper = styled.div`
  width: 100%;

  button {
    margin-bottom: 2em;
  }
`;

export const Total = styled.p`
  font-size: 1.1rem;
  line-height: 1.25rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.black};
  text-align: end;
  padding-top: 0.4em;
  margin: 1em 0;
  border-top: 1px solid ${color.black};

  @media ${device.tablet} {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;
