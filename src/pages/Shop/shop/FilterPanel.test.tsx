import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FilterPanelProps, _FilterPanel } from './FilterPanel.component';

describe('<FilterPanel />', () => {
  const mockSetGridColumns = jest.fn();
  const mockFilterProducts = jest.fn();

  const props: FilterPanelProps = {
    colorFilters: [
      {
        description: 'black',
        amountOfProducts: 2
      },
      {
        description: 'white',
        amountOfProducts: 3
      }
    ],
    characterFilters: [
      {
        description: 'modern',
        amountOfProducts: 2
      },
      {
        description: 'classic',
        amountOfProducts: 3
      }
    ],
    fetchedProductsAmount: 5,
    minPrice: 100,
    maxPrice: 300,
    query: '',
    gridColumns: 2,
    setGridColumns: mockSetGridColumns,
    filterProducts: mockFilterProducts
  };

  const setup = (props: FilterPanelProps) => {
    const utils = render(<_FilterPanel {...props} />);
    const gridOptionsBtns = utils.container.querySelectorAll('button');

    return { ...utils, gridOptionsBtns };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('grid options buttons', () => {
    it('contains correct style rule', () => {
      const { gridOptionsBtns } = setup(props);

      expect(gridOptionsBtns[0]).toHaveStyle('color: #151615');
      expect(gridOptionsBtns[1]).toHaveStyle('color: #bbb');
    });

    it('calls `setGridColumns` func', () => {
      const { gridOptionsBtns } = setup(props);

      fireEvent.click(gridOptionsBtns[0]);
      expect(mockSetGridColumns).toHaveBeenCalledTimes(1);
      expect(mockSetGridColumns).toBeCalledWith(2);

      fireEvent.click(gridOptionsBtns[1]);
      expect(mockSetGridColumns).toHaveBeenCalledTimes(2);
      expect(mockSetGridColumns).toBeCalledWith(3);
    });
  });

  it('contains `QueryResult` element with query value as text', () => {
    const { getByText } = setup({ ...props, query: 'clocks' });
    const queryResult = getByText(/search result/i);

    expect(queryResult).toBeInTheDocument();
    expect(queryResult).toHaveTextContent('clocks');
  });
});
