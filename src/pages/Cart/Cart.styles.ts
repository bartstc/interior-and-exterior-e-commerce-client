import styled from 'styled-components';

import { device, fontWeight } from '../../utils/styles';

export const CartWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: ${fontWeight.bold};
  width: 100%;
  text-align: center;
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 1.4rem;
    margin-bottom: 2em;
  }
`;
