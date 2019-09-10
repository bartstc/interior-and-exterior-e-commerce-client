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
import { connect } from 'react-redux';
import { fetchProductsByType } from '../../modules/shop/shop.actions';
import { Type } from '../../modules/shop/shop.interfaces';

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

interface IProps {
  fetchProductsByType: typeof fetchProductsByType;
}

const _Home: React.FC<IProps> = ({ fetchProductsByType }) => {
  return (
    <Wrapper>
      {categories.map(({ title, src }) => (
        <NavLink
          onClick={() => fetchProductsByType(title.toLowerCase() as Type)}
          to="/shop"
          key={title}
        >
          <NavTitle>{title}</NavTitle>
          <ImageWrapper>
            <NavImage src={src} alt="" />
          </ImageWrapper>
        </NavLink>
      ))}
    </Wrapper>
  );
};

export const Home = connect(
  null,
  { fetchProductsByType }
)(_Home);
