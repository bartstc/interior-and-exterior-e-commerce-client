import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  NavList,
  NavItem,
  PageLink,
  NavDropdown,
  DropList,
  DropListItem,
  FilterShopBtn
} from './HeaderLinks.styles';

import { IStore } from '../../../../modules/rootReducer';
import { selectIsAuth } from '../../../../modules/user/user.selectors';

const shopLinks = [
  'Chairs',
  'Lamps',
  'Clocks',
  'Vases',
  'Benches',
  'Flowerpots',
  'Plants'
];

interface IProps {
  isAuth: boolean;
}

const _HeaderLinks: React.FC<IProps> = ({ isAuth }) => (
  <NavList>
    <NavItem>
      <PageLink to="/shop">
        Products
        <i className="fas fa-caret-down"></i>
      </PageLink>
      <NavDropdown>
        <DropList>
          {shopLinks.map(linkName => (
            <DropListItem key={linkName}>
              <FilterShopBtn>{linkName}</FilterShopBtn>
            </DropListItem>
          ))}
        </DropList>
      </NavDropdown>
    </NavItem>
    <NavItem>
      <PageLink to="/shop">Shop</PageLink>
    </NavItem>
    {!isAuth && (
      <NavItem>
        <PageLink to="/account">Account</PageLink>
      </NavItem>
    )}
    <NavItem>
      <PageLink to="/cart">Cart (1)</PageLink>
    </NavItem>
  </NavList>
);

interface HeaderLinksSelection {
  isAuth: boolean;
}

const mapStateToProps = createStructuredSelector<IStore, HeaderLinksSelection>({
  isAuth: selectIsAuth
});

export const HeaderLinks = connect(mapStateToProps)(_HeaderLinks);
