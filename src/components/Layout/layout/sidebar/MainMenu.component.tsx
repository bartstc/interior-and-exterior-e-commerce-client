import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ListItem, DropBtn, NavLink } from '../Sidebar.styles';

import { SideDrawer } from '../../../SideDrawer/SideDrawer.component';

import { IStore } from '../../../../modules/rootReducer';
import { selectIsAuth } from '../../../../modules/user/user.selectors';

interface IProps {
  showSidebar: boolean;
  handleCloseSidebar: () => void;
  openInterior: () => void;
  openExterior: () => void;
  isAuth: boolean;
}

const _MainMenu: React.FC<IProps> = ({
  openInterior,
  openExterior,
  showSidebar,
  handleCloseSidebar,
  isAuth
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
    {!isAuth && (
      <ListItem>
        <NavLink to="/account">Account</NavLink>
      </ListItem>
    )}
    <ListItem>
      <NavLink to="/cart">Cart (2)</NavLink>
    </ListItem>
  </SideDrawer>
);

interface MainMenuSelection {
  isAuth: boolean;
}

const mapStateToProps = createStructuredSelector<IStore, MainMenuSelection>({
  isAuth: selectIsAuth
});

export const MainMenu = connect(mapStateToProps)(_MainMenu);
