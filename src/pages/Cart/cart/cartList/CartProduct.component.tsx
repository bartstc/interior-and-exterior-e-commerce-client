import React from 'react';

import {
  CartProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductDesc,
  Info,
  Quantity,
  QuantityBtn,
  DeleteBtn
} from './CartProduct.styles';

import testItem from '../../../../assets/chair.png';

export const CartProduct: React.FC = () => (
  <CartProductWrapper>
    <ProductImgWrapper>
      <ProductImg src={testItem} alt="" />
    </ProductImgWrapper>
    <ProductDesc>
      <Info>
        <strong>Black modern chair</strong>
      </Info>
      <Info>
        <strong>$ 129.99</strong>
      </Info>
      <Info>Color: white</Info>
      <Quantity>
        <QuantityBtn>-</QuantityBtn>4<QuantityBtn>+</QuantityBtn>
      </Quantity>
    </ProductDesc>
    <DeleteBtn>x</DeleteBtn>
  </CartProductWrapper>
);
