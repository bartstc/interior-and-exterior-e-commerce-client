import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { DetailsWrapper, Description, MainInfo, Info } from './Details.styles';

import { Gallery } from './details/Gallery.component';
import { Button } from '../../components/Button/Button.component';
import { Product } from '../../modules/shop/shop.interfaces';
import { GlobalSpinner } from '../../components/GlobalSpinner/GlobalSpinner.component';

import { addItem } from '../../modules/cart/cart.actions';

type Params = { id: string };

export interface DetailsProps extends RouteComponentProps<Params> {
  addItemToCart: typeof addItem;
}

export const _Details: React.FC<DetailsProps> = ({
  match: {
    params: { id }
  },
  addItemToCart
}) => {
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setProductData(data);
      } catch (err) {
        // should shows popup msg or something
        console.log(err);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (!productData) return <GlobalSpinner />;

  return (
    <DetailsWrapper>
      <Gallery imageUrls={productData.images} />
      <Description>
        <MainInfo>{productData.name}</MainInfo>
        <MainInfo>
          <strong>$ {productData.price}</strong>
        </MainInfo>
        <Info>{productData.description}</Info>
        <Button onClick={() => addItemToCart(productData)}>Add to cart</Button>
      </Description>
    </DetailsWrapper>
  );
};

export const Details = connect(
  null,
  { addItemToCart: addItem }
)(_Details);
