import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Wrapper } from './Shop.styles';

import { FilterPanel } from './shop/FilterPanel.component';
import { ShopList } from './shop/ShopList.component';
import { GlobalSpinner } from '../../components/GlobalSpinner/GlobalSpinner.component';

import { Store } from '../../modules/rootReducer';
import { selectIsFetching } from '../../modules/shop/shop.selectors';

interface ShopSelection {
  isFetching: boolean;
}

export interface ShopProps extends ShopSelection {}

export const _Shop: React.FC<ShopProps> = ({ isFetching }) => {
  const [gridColumns, setGridColumns] = useState<number>(2);

  if (isFetching) return <GlobalSpinner />;

  return (
    <Wrapper>
      <FilterPanel gridColumns={gridColumns} setGridColumns={setGridColumns} />
      <ShopList gridColumns={gridColumns} />
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector<Store, ShopSelection>({
  isFetching: selectIsFetching
});

export const Shop = connect(mapStateToProps)(_Shop);
