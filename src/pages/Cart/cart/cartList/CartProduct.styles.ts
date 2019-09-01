import styled from 'styled-components';

import { fontWeight, color, device } from '../../../../utils/styles';

export const CartProductWrapper = styled.li`
  display: flex;
  position: relative;
  margin-bottom: 1em;

  @media ${device.tablet} {
    margin-bottom: 1.6em;
  }
`;

export const ProductImgWrapper = styled.figure`
  flex: 0.3;
  overflow: hidden;
  max-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductDesc = styled.div`
  flex: 0.7;
  padding-left: 0.5em;
  padding-right: 30px;
`;

export const Info = styled.p`
  font-size: 0.75rem;
  line-height: 1.1rem;
  font-weight: ${fontWeight.light};
  color: ${color.gray};

  @media ${device.mobileL} {
    font-size: 1.05rem;
    line-height: 1.5rem;
  }

  & strong {
    font-size: 0.85rem;
    line-height: 1.2rem;
    font-weight: ${fontWeight.semiBold};
    color: ${color.black};

    @media ${device.mobileL} {
      font-size: 1.15rem;
      line-height: 1.5rem;
    }
  }
`;

export const Quantity = styled.div`
  font-size: 0.8rem;
  line-height: 1.25rem;
  font-weight: ${fontWeight.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;

  @media ${device.mobileL} {
    font-size: 1.05rem;
    line-height: 1.5rem;
  }
`;

export const QuantityBtn = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  width: 30px;
  height: 26px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  top: 0;
  right: 0;
  width: 20px;
  height: 24px;
  cursor: pointer;
`;
