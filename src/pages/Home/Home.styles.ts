import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device, fontWeight, color } from '../../utils/styles';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
    max-width: 100%;
  }

  @media ${device.laptop} {
    padding-top: 1.2em;
  }
`;

export const NavTitle = styled.h2`
  position: absolute;
  z-index: 2;
  top: 70%;
  left: 0;
  color: ${color.black};
  font-weight: ${fontWeight.bold};
  font-size: 1.15rem;
  background: ${color.white};
  padding: 0.3em 2em 0.3em 0.5em;

  @media ${device.mobileL} {
    font-size: 1.25rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 260px;
  overflow: hidden;
  position: relative;
  transition: opacity 0.3s ease-in-out;

  @media ${device.mobileL} {
    max-height: 360px;
  }

  @media ${device.tablet} {
    height: calc(20px + 29vw);
  }

  @media ${device.laptop} {
    max-height: 350px;
  }

  &:after {
    content: '';
    transition: all 1.4s ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: ${color.white};
    animation: slideIn 1.4s forwards;
  }

  @keyframes slideIn {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  display: block;
  margin-bottom: 1.4em;

  &:hover ${ImageWrapper} {
    opacity: 0.45;
  }
`;

export const NavImage = styled.img`
  width: 100%;
  transform: scale(1.3);
  transition: transform 1.4s ease-in-out;
  animation: zoomOut 1.4s forwards;

  @keyframes zoomOut {
    0% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
