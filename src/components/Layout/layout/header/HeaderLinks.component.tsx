import React from 'react';

import {
  NavList,
  NavItem,
  PageLink,
  NavDropdown,
  DropList,
  DropListItem,
  FilterShopBtn
} from './HeaderLinks.styles';

const shopLinks = [
  'Chairs',
  'Lamps',
  'Clocks',
  'Vases',
  'Benches',
  'Flowerpots',
  'Plants'
];

export const HeaderLinks: React.FC = () => (
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
    <NavItem>
      <PageLink to="/account">Account</PageLink>
    </NavItem>
    <NavItem>
      <PageLink to="/cart">Cart (1)</PageLink>
    </NavItem>
  </NavList>
);
