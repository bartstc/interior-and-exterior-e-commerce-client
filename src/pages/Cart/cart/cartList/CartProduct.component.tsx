import React from 'react';

import {
  CartProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductDesc,
  Info,
  Quantity,
  QuantityBtn,
  DeleteBtn
} from './CartProduct.styles';

import { Product } from '../../../../modules/shop/shop.interfaces';
import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  clearItemFromCart
} from '../../../../modules/cart/cart.actions';

export interface CartProductProps {
  cartItemData: Product;
  removeItem: typeof removeItem;
  addItem: typeof addItem;
  clearItemFromCart: typeof clearItemFromCart;
}

export const _CartProduct: React.FC<CartProductProps> = ({
  cartItemData,
  removeItem,
  addItem,
  clearItemFromCart
}) => {
  const { id, images, name, price, color, quantity } = cartItemData;

  const removeCartItem = () => removeItem(cartItemData);

  const addCartItem = () => addItem(cartItemData);

  const clearCartItem = () => clearItemFromCart(id);

  return (
    <CartProductWrapper>
      <ProductImgWrapper>
        <ProductImg src={images[0]} alt={name} />
      </ProductImgWrapper>
      <ProductDesc>
        <Info>
          <strong>{name}</strong>
        </Info>
        <Info>
          <strong>$ {price}</strong>
        </Info>
        <Info>Color: {color}</Info>
        <Quantity>
          <QuantityBtn data-testid="remove-btn" onClick={removeCartItem}>
            -
          </QuantityBtn>
          {quantity}
          <QuantityBtn data-testid="add-btn" onClick={addCartItem}>
            +
          </QuantityBtn>
        </Quantity>
      </ProductDesc>
      <DeleteBtn data-testid="clear-btn" onClick={clearCartItem}>
        x
      </DeleteBtn>
    </CartProductWrapper>
  );
};

export const CartProduct = connect(
  null,
  { removeItem, addItem, clearItemFromCart }
)(_CartProduct);
