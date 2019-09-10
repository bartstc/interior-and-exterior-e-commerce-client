import { Product, FiltersMap, FilterItem } from './shop.interfaces';

export type FilterType = 'color' | 'character';

export const createFiltersList = (
  products: Product[],
  filter: FilterType
): FilterItem[] => {
  let filters: FiltersMap = {};

  if (!products.length) return [];

  const filtersMap = products.reduce((acc, product, _, __) => {
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
