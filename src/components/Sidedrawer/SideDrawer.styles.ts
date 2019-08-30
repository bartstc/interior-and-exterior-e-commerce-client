import styled from 'styled-components';

import { color, device, fontWeight } from '../../utils/styles';

interface IProps {
  zIndex: number;
  toggled: boolean;
}

export const Wrapper = styled.nav`
  position: fixed;
  z-index: ${(props: IProps) => props.zIndex};
  top: 0;
  left: 0;
  width: 100%;
  max-width: 260px;
  height: 100%;
  transform: ${(props: IProps) =>
    props.toggled ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.2s ease;
  background: ${color.white};

  @media ${device.tablet} {
    max-width: 400px;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 75px;
  background: ${color.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5em;
`;

export const Logo = styled.p`
  font-size: 1rem;
  color: ${color.white};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
`;

export const CloseBtn = styled.button`
  border: none;
  background: none;
  width: 50px;
  height: 50px;
  font-size: 1.55rem;
  color: ${color.white};
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
