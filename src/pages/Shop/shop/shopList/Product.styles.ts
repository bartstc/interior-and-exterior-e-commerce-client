import styled from 'styled-components';
import { device, fontWeight } from '../../../../utils/styles';

export const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  @media ${device.tablet} {
    max-height: 380px;
  }
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
  font-size: 1.1rem;
  line-height: 1.45rem;
  font-weight: ${fontWeight.light};

  @media ${device.laptop} {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;

export const ProductPrice = styled.p`
  flex: 0.3;
  font-size: 1.1rem;
  font-weight: ${fontWeight.bold};
  text-align: end;

  @media ${device.laptop} {
    font-size: 1.3rem;
  }
`;
