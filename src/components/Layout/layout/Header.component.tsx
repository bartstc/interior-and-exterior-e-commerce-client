import React from 'react';

import { HeaderLinks } from './header/HeaderLinks.component';

import {
  HeaderWrapper,
  HeaderLimiter,
  Logo,
  LogoTitle,
  Nav,
  Hamburger,
  SearchBtn
} from './Header.styles';

export interface HeaderProps {
  handleOpen: () => void;
  toggleSearchForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  handleOpen,
  toggleSearchForm
}) => {
  return (
    <HeaderWrapper>
      <HeaderLimiter>
        <Logo to="/">
          <LogoTitle>Interior & Exterior</LogoTitle>
        </Logo>
        <Nav>
          <Hamburger
            data-testid="Hamburger"
            aria-label="open menu"
            title="Menu"
            onClick={handleOpen}
          >
            <i className="fas fa-bars"></i>
          </Hamburger>
          <HeaderLinks />
          <SearchBtn data-testid="SearchBtn" onClick={toggleSearchForm}>
            <i className="fas fa-search"></i>
          </SearchBtn>
        </Nav>
      </HeaderLimiter>
    </HeaderWrapper>
  );
};
