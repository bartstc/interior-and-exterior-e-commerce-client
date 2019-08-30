import React from 'react';

import { SideDrawer } from '../../../Sidedrawer/SideDrawer.component';

import { ListItem, DropBtn, NavLink } from '../Sidebar.styles';

interface IProps {
  showSidebar: boolean;
  handleCloseSidebar: () => void;
  openInterior: () => void;
  openExterior: () => void;
}

export const MainMenu: React.FC<IProps> = ({
  openInterior,
  openExterior,
  showSidebar,
  handleCloseSidebar
}) => (
  <SideDrawer
    toggled={showSidebar}
    handleClose={handleCloseSidebar}
    zIndex={10}
    title="Interior & Exterior"
  >
    <ListItem>
      <NavLink to="/">Home</NavLink>
    </ListItem>
    <ListItem>
      <DropBtn onClick={openInterior}>
        Interior
        <i className="fas fa-angle-right"></i>
      </DropBtn>
    </ListItem>
    <ListItem>
      <DropBtn onClick={openExterior}>
        Exterior
        <i className="fas fa-angle-right"></i>
      </DropBtn>
    </ListItem>
    <ListItem>
      <NavLink to="/account">Account</NavLink>
    </ListItem>
    <ListItem>
      <NavLink to="/cart">Cart (2)</NavLink>
    </ListItem>
  </SideDrawer>
);
