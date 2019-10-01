import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  ImageWrapper,
  ProductImg,
  ProductDesc,
  ProductName,
  ProductPrice
} from './Product.styles';

import { Product as IProduct } from '../../../../modules/shop/shop.interfaces';

export interface ProductProps {
  productData: IProduct;
}

export const Product: React.FC<ProductProps> = ({
  productData: { id, images, name, price }
}) => {
  return (
    <Link to={`/product/${id}`}>
      <Wrapper>
        <ImageWrapper>
          <ProductImg src={images[0]} alt={name} />
        </ImageWrapper>
        <ProductDesc>
          <ProductName>{name}</ProductName>
          <ProductPrice>$ {price}</ProductPrice>
        </ProductDesc>
      </Wrapper>
    </Link>
  );
};
