import { Product } from './shop.interfaces';
import {
  limitResults,
  createFiltersList,
  calcMinPrice,
  calcMaxPrice,
  filterFetchedProducts
} from './shop.utils';

describe('shop module utils', () => {
  const products: Product[] = [
    {
      character: 'fancy',
      collection: 'clocks',
      color: 'black',
      description: 'lorem ipsum',
      id: '1',
      images: ['aa', 'bb'],
      name: 'Fancy Black Clock',
      price: '200',
      type: 'clocks'
    },
    {
      character: 'classic',
      collection: 'chairs',
      color: 'black',
      description: 'lorem ipsum',
      id: '2',
      images: ['aa', 'bb'],
      name: 'Classic Black Clock',
      price: '120',
      type: 'clocks'
    },
    {
      character: 'classic',
      collection: 'chairs',
      color: 'white',
      description: 'lorem ipsum',
      id: '3',
      images: ['aa', 'bb'],
      name: 'Classic White Chair',
      price: '80',
      type: 'chairs'
    }
  ];

  describe('limitResults()', () => {
    it('returns limited list of products', () => {
      const res = limitResults(products, 2);
      expect(res.length).toBe(2);
    });
  });

  describe('createFiltersList()', () => {
    it('returns an empty array when products list is empty', () => {
      const res = createFiltersList([], 'color');
      expect(res).toEqual([]);
    });

    it('returns array of color filters', () => {
      const expectedRes = [
        { amountOfProducts: 2, description: 'black' },
        { amountOfProducts: 1, description: 'white' }
      ];
      const res = createFiltersList(products, 'color');

      expect(res).toEqual(expectedRes);
    });

    it('returns array of character filters', () => {
      const expectedRes = [
        { amountOfProducts: 1, description: 'fancy' },
        { amountOfProducts: 2, description: 'classic' }
      ];
      const res = createFiltersList(products, 'character');

      expect(res).toEqual(expectedRes);
    });
  });

  describe('calcMinPrice()', () => {
    it('returns 0 when products list is empty', () => {
      expect(calcMinPrice([])).toBe(0);
    });

    it('returns min price based on products list', () => {
      expect(calcMinPrice(products)).toBe(80);
    });
  });

  describe('calcMaxPrice()', () => {
    it('returns 0 when products list is empty', () => {
      expect(calcMaxPrice([])).toBe(0);
    });

    it('returns min price based on products list', () => {
      expect(calcMaxPrice(products)).toBe(200);
    });
  });

  describe('filterFetchedProducts()', () => {
    let filters = {
      color: 'black',
      character: 'classic',
      price: 300
    };

    it('returns empty array when passed products list is empty', () => {
      const res = filterFetchedProducts([], filters);
      expect(res).toEqual([]);
    });

    it('returns array with single product which match filter criteria', () => {
      const expectedRes = [
        {
          character: 'classic',
          collection: 'chairs',
          color: 'black',
          description: 'lorem ipsum',
          id: '2',
          images: ['aa', 'bb'],
          name: 'Classic Black Clock',
          price: '120',
          type: 'clocks'
        }
      ];
      const res = filterFetchedProducts(products, filters);

      expect(res).toEqual(expectedRes);
    });

    it('returns empty array when every of products dont match filter criteria', () => {
      filters.price = 100;
      const res = filterFetchedProducts(products, filters);

      expect(res).toEqual([]);
    });
  });
});
