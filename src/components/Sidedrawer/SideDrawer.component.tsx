import React from 'react';

import { List, Wrapper, Header, Logo, CloseBtn } from './SideDrawer.styles';

export interface SideDrawerProps {
  toggled: boolean;
  zIndex: number;
  title: string;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[] | any;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  toggled,
  zIndex,
  title,
  handleClose,
  children
}) => (
  <Wrapper data-testid="Wrapper" toggled={toggled} zIndex={zIndex}>
    <Header>
      <Logo>{title}</Logo>
      <CloseBtn title="close menu" aria-label="close" onClick={handleClose}>
        <i className="far fa-times-circle"></i>
      </CloseBtn>
    </Header>
    <List>{children}</List>
  </Wrapper>
);
