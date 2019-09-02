import React from 'react';

import { DetailsWrapper, Description, MainInfo, Info } from './Details.styles';

import { Gallery } from './details/Gallery.component';
import { Button } from '../../components/Button/Button.component';

export const Details: React.FC = () => {
  return (
    <DetailsWrapper>
      <Gallery />
      <Description>
        <MainInfo>Modern orange chair</MainInfo>
        <MainInfo>
          <strong>$ 129.99</strong>
        </MainInfo>
        <Info>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Info>
        <Button>Add to cart</Button>
      </Description>
    </DetailsWrapper>
  );
};
