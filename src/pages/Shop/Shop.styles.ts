import styled from 'styled-components';

import { device } from '../../utils/styles';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.laptop} {
    padding-top: 1.2em;
  }
`;
