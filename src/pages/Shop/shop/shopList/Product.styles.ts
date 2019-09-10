import styled from 'styled-components';

import { device, fontWeight, color } from '../../../../utils/styles';

export const ImageWrapper = styled.figure`
  height: 310px;

  @media ${device.mobileL} {
    height: 410px;
  }

  @media ${device.tablet} {
    height: 350px;
  }

  @media ${device.laptop} {
    height: 440px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`;

export const Wrapper = styled.li`
  margin-bottom: 2em;
  width: 100%;

  @media ${device.laptop} {
    margin-bottom: 2.8em;
  }

  &:hover ${ProductImg} {
    opacity: 0.2;
  }
`;

export const ProductDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.25em;
`;

export const ProductName = styled.p`
  flex: 0.7;
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: ${fontWeight.regular};
  color: ${color.gray};

  @media ${device.laptop} {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

export const ProductPrice = styled.p`
  flex: 0.3;
  font-size: 1rem;
  font-weight: ${fontWeight.bold};
  text-align: end;

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;
