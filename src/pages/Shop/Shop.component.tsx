import React, { useState } from 'react';

import { FilterPanel } from './shop/FilterPanel.component';
import { ShopList } from './shop/ShopList.component';

import { Wrapper } from './Shop.styles';

export const Shop: React.FC = () => {
  const [gridColumns, setGridColumns] = useState(2);

  return (
    <Wrapper>
      <FilterPanel gridColumns={gridColumns} setGridColumns={setGridColumns} />
      <ShopList gridColumns={gridColumns} />
    </Wrapper>
  );
};
