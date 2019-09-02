import React from 'react';

import { ListItem, FilterShopBtn } from '../Sidebar.styles';

import { SideDrawer } from '../../../Sidedrawer/SideDrawer.component';

const interiorLinks = ['Chairs', 'Lamps', 'Clocks', 'Vases'];
const exteriorLinks = ['Benches', 'Flowerpots', 'Plants'];

interface IProps {
  showInterior: boolean;
  showExterior: boolean;
  closeInterior: () => void;
  closeExterior: () => void;
}

export const CollectionsMenu: React.FC<IProps> = ({
  showInterior,
  showExterior,
  closeInterior,
  closeExterior
}) => (
  <>
    <SideDrawer
      toggled={showInterior}
      handleClose={closeInterior}
      zIndex={11}
      title="Interior"
    >
      {interiorLinks.map(linkName => (
        <ListItem key={linkName}>
          <FilterShopBtn>{linkName}</FilterShopBtn>
        </ListItem>
      ))}
    </SideDrawer>
    <SideDrawer
      toggled={showExterior}
      handleClose={closeExterior}
      zIndex={11}
      title="Exterior"
    >
      {exteriorLinks.map(linkName => (
        <ListItem key={linkName}>
          <FilterShopBtn>{linkName}</FilterShopBtn>
        </ListItem>
      ))}
    </SideDrawer>
  </>
);
