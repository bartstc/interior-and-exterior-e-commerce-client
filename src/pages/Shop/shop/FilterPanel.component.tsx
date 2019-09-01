import React, { ChangeEvent, useState } from 'react';

import {
  Wrapper,
  GridOptions,
  GridOptionBtn,
  QueryResult
} from './FilterPanel.styles';
import { SelectListGroup } from '../../../components/SelectListGroup/SelectListGroup.component';
import { RangeInput } from '../../../components/RangeInput/RangeInput.component';

const colors = [
  { label: 'Black, white ...', value: '' },
  { label: 'black', value: 'black' },
  { label: 'white', value: 'white' }
];

const characters = [
  { label: 'Modern, classic ...', value: '' },
  { label: 'modern', value: 'modern' },
  { label: 'classic', value: 'classic' }
];

const initState = {
  color: '',
  character: '',
  price: 0
};

interface IProps {
  gridColumns: number;
  setGridColumns: React.Dispatch<React.SetStateAction<number>>;
}

export const FilterPanel: React.FC<IProps> = ({
  gridColumns,
  setGridColumns
}) => {
  const [filters, setFilters] = useState(initState);

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
          options={colors}
          id="color"
          label="Color"
        />
        <SelectListGroup
          name="character"
          value={filters.character}
          onChange={onChange}
          options={characters}
          id="character"
          label="Character"
        />
        <RangeInput
          name="price"
          value={filters.price}
          onChange={onChange}
          min={0}
          max={500}
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
      <QueryResult>Search result: "query"</QueryResult>
    </>
  );
};
