import React from 'react';

import { Backdrop } from '../../Backdrop/Backdrop.component';
import { CollectionsMenu } from './sidebar/CollectionsMenu.compnent';
import { MainMenu } from './sidebar/MainMenu.component';

import { useSideDrawer } from '../../../hooks/useSideDrawer';

export interface SidebarProps {
  showSidebar: boolean;
  handleCloseSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  handleCloseSidebar
}) => {
  const [showInterior, openInterior, closeInterior] = useSideDrawer();
  const [showExterior, openExterior, closeExterior] = useSideDrawer();

  const closeAll = () => {
    handleCloseSidebar();
    if (showInterior) closeInterior();
    if (showExterior) closeExterior();
  };

  return (
    <>
      <Backdrop show={showSidebar} handleClose={closeAll} />
      <MainMenu
        showSidebar={showSidebar}
        handleCloseSidebar={handleCloseSidebar}
        openInterior={openInterior}
        openExterior={openExterior}
      />
      <CollectionsMenu
        showInterior={showInterior}
        showExterior={showExterior}
        closeInterior={closeInterior}
        closeExterior={closeExterior}
        handleCloseMenu={closeAll}
      />
    </>
  );
};
