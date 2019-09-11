import React, { ChangeEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Wrapper,
  GridOptions,
  GridOptionBtn,
  QueryResult
} from './FilterPanel.styles';

import { SelectListGroup } from '../../../components/SelectListGroup/SelectListGroup.component';
import { RangeInput } from '../../../components/RangeInput/RangeInput.component';

import {
  FilterItem,
  FilterCriteria
} from '../../../modules/shop/shop.interfaces';
import { Store } from '../../../modules/rootReducer';
import {
  selectColorFilters,
  selectCharacterFilters,
  selectFetchedProductsAmount,
  selectMinPrice,
  selectMaxPrice,
  selectQuery
} from '../../../modules/shop/shop.selectors';
import { filterProducts } from '../../../modules/shop/shop.actions';

const initFilters: FilterCriteria = {
  color: 'all',
  character: 'all',
  price: 500
};

interface FilterPanelSelection {
  colorFilters: FilterItem[];
  characterFilters: FilterItem[];
  fetchedProductsAmount: number;
  minPrice: number;
  maxPrice: number;
  query: string;
}

interface IProps extends FilterPanelSelection {
  gridColumns: number;
  setGridColumns: React.Dispatch<React.SetStateAction<number>>;
  filterProducts: typeof filterProducts;
}

const _FilterPanel: React.FC<IProps> = ({
  gridColumns,
  setGridColumns,
  colorFilters,
  characterFilters,
  fetchedProductsAmount,
  minPrice,
  maxPrice,
  query,
  filterProducts
}) => {
  const [filters, setFilters] = useState<FilterCriteria>(initFilters);

  useEffect(() => {
    filterProducts(filters);
  }, [filters, filterProducts]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Wrapper>
        <SelectListGroup
          name="color"
          value={filters.color}
          onChange={onChange}
          options={[
            { description: 'all', amountOfProducts: fetchedProductsAmount },
            ...colorFilters
          ]}
          id="color"
          label="Color"
        />
        <SelectListGroup
          name="character"
          value={filters.character}
          onChange={onChange}
          options={[
            { description: 'all', amountOfProducts: fetchedProductsAmount },
            ...characterFilters
          ]}
          id="character"
          label="Character"
        />
        <RangeInput
          name="price"
          value={filters.price}
          onChange={onChange}
          min={minPrice}
          max={maxPrice}
          id="price"
          label="Price"
        />
        <GridOptions>
          <GridOptionBtn
            active={gridColumns === 2}
            onClick={() => setGridColumns(2)}
          >
            <i className="fas fa-th-large"></i>
          </GridOptionBtn>
          <GridOptionBtn
            active={gridColumns === 3}
            onClick={() => setGridColumns(3)}
          >
            <i className="fas fa-th"></i>
          </GridOptionBtn>
        </GridOptions>
      </Wrapper>
      {query && <QueryResult>Search result: "{query}"</QueryResult>}
    </>
  );
};

const mapStateToProps = createStructuredSelector<Store, FilterPanelSelection>({
  colorFilters: selectColorFilters,
  characterFilters: selectCharacterFilters,
  fetchedProductsAmount: selectFetchedProductsAmount,
  minPrice: selectMinPrice,
  maxPrice: selectMaxPrice,
  query: selectQuery
});

export const FilterPanel = connect(
  mapStateToProps,
  { filterProducts }
)(_FilterPanel);
