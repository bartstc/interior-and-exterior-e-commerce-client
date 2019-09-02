import styled from 'styled-components';

import { fontWeight, device } from '../../utils/styles';

export const DetailsWrapper = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 2em;

  @media ${device.laptop} {
    max-width: 100%;
    display: grid;
    grid-template-columns: 700px auto;
    grid-column-gap: 2em;
  }
`;

export const Description = styled.div`
  margin-top: 1em;

  @media ${device.laptop} {
    margin-top: 0;
  }

  button {
    max-width: 400px;
  }
`;

export const MainInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
  font-weight: ${fontWeight.light};

  @media ${device.tablet} {
    font-size: 1.55rem;
    line-height: 1.95rem;
  }

  strong {
    font-weight: ${fontWeight.bold};

    @media ${device.tablet} {
      font-size: 1.25rem;
      line-height: 1.6rem;
    }
  }
`;

export const Info = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${fontWeight.light};
  margin-top: 0.8em;
  margin-bottom: 2.5em;

  @media ${device.tablet} {
    font-size: 1.2rem;
    line-height: 1.75rem;
  }
`;
