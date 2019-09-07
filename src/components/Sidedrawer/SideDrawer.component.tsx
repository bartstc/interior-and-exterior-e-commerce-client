import React from 'react';

import { List, Wrapper, Header, Logo, CloseBtn } from './SideDrawer.styles';

interface IProps {
  toggled: boolean;
  zIndex: number;
  title: string;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[] | any;
}

export const SideDrawer: React.FC<IProps> = ({
  toggled,
  zIndex,
  title,
  handleClose,
  children
}) => (
  <Wrapper toggled={toggled} zIndex={zIndex}>
    <Header>
      <Logo>{title}</Logo>
      <CloseBtn onClick={handleClose}>
        <i className="far fa-times-circle"></i>
      </CloseBtn>
    </Header>
    <List>{children}</List>
  </Wrapper>
);
