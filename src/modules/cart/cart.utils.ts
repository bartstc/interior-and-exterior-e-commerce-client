import { Product } from '../shop/shop.interfaces';

export const addItemToCart = (
  cartItems: Product[],
  cartItemToAdd: Product
): Product[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (!existingCartItem) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }

  return cartItems.map(cartItem => {
    if (!cartItem.quantity) return cartItem;

    return cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem;
  });
};

export const removeItemFromCart = (
  cartItems: Product[],
  cartItemToRemove: Product
): Product[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => {
    if (!cartItem.quantity) return cartItem;

    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
