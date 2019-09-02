import React, { useState } from 'react';

import { Wrapper } from './Shop.styles';

import { FilterPanel } from './shop/FilterPanel.component';
import { ShopList } from './shop/ShopList.component';

export const Shop: React.FC = () => {
  const [gridColumns, setGridColumns] = useState(2);

  return (
    <Wrapper>
      <FilterPanel gridColumns={gridColumns} setGridColumns={setGridColumns} />
      <ShopList gridColumns={gridColumns} />
    </Wrapper>
  );
};
