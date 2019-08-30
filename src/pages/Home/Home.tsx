import React from 'react';

import {
  Wrapper,
  NavLink,
  NavTitle,
  NavImage,
  ImageWrapper
} from './Home.styles';

import chairsImg from '../../assets/chair.png';
import lampsImg from '../../assets/lamp.png';
import clockImg from '../../assets/clock.png';
import vaseImg from '../../assets/vase.png';
import benchImg from '../../assets/bench.png';
import flowerpotImg from '../../assets/flowerpot.png';
import plantImg from '../../assets/plant.png';

const categories = [
  {
    title: 'Lamps',
    src: lampsImg
  },
  {
    title: 'Vases',
    src: vaseImg
  },
  {
    title: 'Chairs',
    src: chairsImg
  },
  {
    title: 'Clocks',
    src: clockImg
  },
  {
    title: 'Benches',
    src: benchImg
  },
  {
    title: 'Flowerpots',
    src: flowerpotImg
  },
  {
    title: 'Plants',
    src: plantImg
  }
];

export const Home: React.FC = () => {
  return (
    <Wrapper>
      {categories.map(({ title, src }) => (
        <NavLink to="/shop" key={title}>
          <NavTitle>{title}</NavTitle>
          <ImageWrapper>
            <NavImage src={src} alt="" />
          </ImageWrapper>
        </NavLink>
      ))}
    </Wrapper>
  );
};
