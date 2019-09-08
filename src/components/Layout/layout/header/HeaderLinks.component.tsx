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
  FilterShopBtn,
  SignOutBtn
} from './HeaderLinks.styles';

import { IStore } from '../../../../modules/rootReducer';
import { selectIsAuth } from '../../../../modules/user/user.selectors';
import { checkSession } from '../../../../modules/user/user.actions';

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
  checkSession: typeof checkSession;
}

const _HeaderLinks: React.FC<IProps> = ({ isAuth, checkSession }) => {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    checkSession();
  };

  return (
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
      {isAuth && (
        <NavItem>
          <SignOutBtn onClick={handleLogout}>Logout</SignOutBtn>
        </NavItem>
      )}
      <NavItem>
        <PageLink to="/cart">Cart (1)</PageLink>
      </NavItem>
    </NavList>
  );
};

interface HeaderLinksSelection {
  isAuth: boolean;
}

const mapStateToProps = createStructuredSelector<IStore, HeaderLinksSelection>({
  isAuth: selectIsAuth
});

export const HeaderLinks = connect(
  mapStateToProps,
  { checkSession }
)(_HeaderLinks);
