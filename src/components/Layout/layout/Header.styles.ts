import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device, color, fontWeight } from '../../../utils/styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  position: relative;
  z-index: 5;
  background: ${color.white};

  @media ${device.tablet} {
    height: 70px;
    margin-bottom: 1em;
  }

  @media ${device.laptop} {
    padding-top: 50px;
    margin-bottom: 3em;
  }
`;

export const HeaderLimiter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 0.5em;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  font-size: 0.9rem;
  color: ${color.black};
  font-weight: ${fontWeight.semiBold};
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Hamburger = styled.button`
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  border: none;
  color: ${color.black};
  font-size: 1.4rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
  width: 45px;
  height: 45px;
  font-size: 1.15rem;
  font-weight: ${fontWeight.regular};
  color: ${color.black};
  cursor: pointer;

  @media ${device.laptop} {
    color: ${color.gray};
    height: 40px;
  }
`;
