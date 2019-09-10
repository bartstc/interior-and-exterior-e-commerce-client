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
  FilterShopLink,
  SignOutBtn
} from './HeaderLinks.styles';

import { Store } from '../../../../modules/rootReducer';
import { selectIsAuth } from '../../../../modules/user/user.selectors';
import { checkSession } from '../../../../modules/user/user.actions';
import { fetchProductsByType } from '../../../../modules/shop/shop.actions';
import { Type } from '../../../../modules/shop/shop.interfaces';

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
  fetchProductsByType: typeof fetchProductsByType;
}

const _HeaderLinks: React.FC<IProps> = ({
  isAuth,
  checkSession,
  fetchProductsByType
}) => {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    checkSession();
  };

  return (
    <NavList>
      <NavItem>
        <PageLink onClick={() => fetchProductsByType('all')} to="/shop">
          Products
          <i className="fas fa-caret-down"></i>
        </PageLink>
        <NavDropdown>
          <DropList>
            {shopLinks.map(linkName => (
              <DropListItem key={linkName}>
                <FilterShopLink
                  onClick={() =>
                    fetchProductsByType(linkName.toLocaleLowerCase() as Type)
                  }
                  to="/shop"
                >
                  {linkName}
                </FilterShopLink>
              </DropListItem>
            ))}
          </DropList>
        </NavDropdown>
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

const mapStateToProps = createStructuredSelector<Store, HeaderLinksSelection>({
  isAuth: selectIsAuth
});

export const HeaderLinks = connect(
  mapStateToProps,
  { checkSession, fetchProductsByType }
)(_HeaderLinks);
