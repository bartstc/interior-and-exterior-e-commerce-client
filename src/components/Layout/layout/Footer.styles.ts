import styled from 'styled-components';

import { device, color, fontWeight } from '../../../utils/styles';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 80px;
  }
`;

export const Paragraph = styled.p`
  color: ${color.gray};
  font-weight: ${fontWeight.bold};
  font-size: 1.2rem;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;
