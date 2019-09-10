import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, fontWeight } from '../../../utils/styles';

export const ListItem = styled.li`
  width: 100%;
  padding: 0.6em 0.5em;
  border-bottom: 1px solid ${color.gray};
`;

export const DropBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  line-height: 100%;
  font-weight: ${fontWeight.semiBold};
  color: ${color.black};
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0.5em 0;

  i {
    font-size: 1.4rem;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  line-height: 100%;
  font-weight: ${fontWeight.semiBold};
  color: ${color.black};
  text-transform: uppercase;
  padding: 0.5em 0;
`;

export const SignOutBtn = styled.button`
  display: block;
  font-size: 1rem;
  line-height: 100%;
  font-weight: ${fontWeight.semiBold};
  color: ${color.black};
  text-transform: uppercase;
  padding: 0.5em 0;
  background: none;
  border: none;
  width: 100%;
  text-align: start;
`;

export const FilterShopLink = styled(Link)`
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 100%;
  font-weight: ${fontWeight.semiBold};
  color: ${color.black};
  text-transform: uppercase;
  padding: 0.5em 0;
  cursor: pointer;
  text-align: start;
`;
