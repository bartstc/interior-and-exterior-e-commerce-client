import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  ProductImg,
  ProductDesc,
  ProductName,
  ProductPrice
} from './Product.styles';

import testImg from '../../../../assets/chair.png';

export const Product: React.FC = () => {
  return (
    <Link to="/product/1">
      <Wrapper>
        <ProductImg src={testImg} alt="" />
        <ProductDesc>
          <ProductName>Black modern chair</ProductName>
          <ProductPrice>$ 129.99</ProductPrice>
        </ProductDesc>
      </Wrapper>
    </Link>
  );
};
