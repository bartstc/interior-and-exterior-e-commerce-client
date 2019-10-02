import {
  Product,
  FiltersMap,
  FilterItem,
  FilterCriteria
} from './shop.interfaces';

export type FilterType = 'color' | 'character';

export const limitResults = (products: Product[], limit: number): Product[] =>
  products.filter((_, i) => i < limit);

export const createFiltersList = (
  products: Product[],
  filter: FilterType
): FilterItem[] => {
  let filters: FiltersMap = {};

  if (!products.length) return [];

  const filtersMap = products.reduce((acc, product, _, __): FiltersMap => {
    // If filter item already exists
    if (acc[product[filter]]) {
      acc[product[filter]] = {
        description: product[filter],
        amountOfProducts: acc[product[filter]].amountOfProducts + 1
      };
    } else {
      acc[product[filter]] = {
        description: product[filter],
        amountOfProducts: 1
      };
    }

    return acc;
  }, filters);

  return Object.values(filtersMap);
};

export const calcMinPrice = (products: Product[]): number => {
  if (!products.length) return 0;
  return Math.min(...products.map(prod => parseFloat(prod.price)));
};

export const calcMaxPrice = (products: Product[]): number => {
  if (!products.length) return 0;
  return Math.max(...products.map(prod => parseFloat(prod.price)));
};

export const filterFetchedProducts = (
  products: Product[],
  filters: FilterCriteria
): Product[] => {
  let tempProducts = [...products];
  const { color, character, price } = filters;

  if (color !== 'all') {
    tempProducts = tempProducts.filter(prod => prod.color === color);
  }

  if (character !== 'all') {
    tempProducts = tempProducts.filter(prod => prod.character === character);
  }

  tempProducts = tempProducts.filter(prod => parseFloat(prod.price) <= price);

  return tempProducts;
};
