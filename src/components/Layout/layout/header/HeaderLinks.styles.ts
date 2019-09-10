import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, fontWeight, device } from '../../../../utils/styles';

export const NavList = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-around;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const NavDropdown = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  left: -40px;
  top: 28px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease;
`;

export const PageLink = styled(Link)`
  font-size: 1rem;
  padding: 0.4em;
  font-weight: ${fontWeight.regular};
  color: ${color.gray};
  border-bottom: 2px solid ${color.white};
  transition: all 0.15s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${color.gray};
    box-shadow: inset 0 -2px 0 #444;
  }

  i {
    margin-left: 0.55em;
  }
`;

export const NavItem = styled.li`
  margin: 0 1em;
  position: relative;

  &:hover ${NavDropdown} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${PageLink} {
    border-bottom: 2px solid ${color.gray};
    box-shadow: inset 0 -2px 0 #444;
  }
`;

export const DropList = styled.ul`
  width: 100%;
`;

export const DropListItem = styled.li`
  padding: 0.5em 0;
  width: 100%;
`;

export const FilterShopLink = styled(Link)`
  font-size: 1rem;
  padding: 0.15em 0;
  font-weight: ${fontWeight.regular};
  color: ${color.gray};
  display: block;
  width: 100%;
  text-align: start;
  cursor: pointer;
  transition: padding-left 0.25s ease-in-out;

  &:hover {
    padding-left: 0.4em;
  }
`;

export const SignOutBtn = styled.button`
  font-size: 1rem;
  padding: 0.4em;
  font-weight: ${fontWeight.regular};
  color: ${color.gray};
  border: none;
  border-bottom: 2px solid ${color.white};
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  background: none;

  &:hover {
    border-bottom: 2px solid ${color.gray};
    box-shadow: inset 0 -2px 0 #444;
  }

  i {
    margin-left: 0.55em;
  }
`;
