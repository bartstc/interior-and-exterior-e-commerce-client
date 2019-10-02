import { Product } from '../shop/shop.interfaces';
import { addItemToCart, removeItemFromCart } from './cart.utils';

describe('cart module utils', () => {
  const existingItem: Product = {
    character: 'classic',
    collection: 'chairs',
    color: 'black',
    description: 'lorem ipsum',
    id: '1',
    images: ['aa', 'bb'],
    name: 'Classic Black Clock',
    price: '120',
    type: 'clocks',
    quantity: 1
  };

  const newItem: Product = {
    character: 'classic',
    collection: 'chairs',
    color: 'white',
    description: 'lorem ipsum',
    id: '2',
    images: ['aa', 'bb'],
    name: 'Classic White Chair',
    price: '80',
    type: 'chairs'
  };

  let cartItems: Product[] = [existingItem];

  describe('addItemToCart()', () => {
    it('adds a new cart item', () => {
      const expectedRes = [...cartItems, { ...newItem, quantity: 1 }];
      const res = addItemToCart(cartItems, newItem);

      expect(res).toEqual(expectedRes);
    });

    it('increases quantity prop when cart item already exists', () => {
      const expectedRes = [{ ...existingItem, quantity: 2 }];
      const res = addItemToCart(cartItems, existingItem);

      expect(res).toEqual(expectedRes);
    });
  });

  describe('removeItemFromCart()', () => {
    it('removes cart item when quantity is equal to 1', () => {
      const res = removeItemFromCart(cartItems, existingItem);
      expect(res).toEqual([]);
    });

    it('decreases quantity prop when cart item`s quantity is more than 1', () => {
      const expectedRes = [{ ...existingItem, quantity: 1 }];
      cartItems = [{ ...existingItem, quantity: 2 }];
      const res = removeItemFromCart(cartItems, existingItem);

      expect(res).toEqual(expectedRes);
    });
  });
});
