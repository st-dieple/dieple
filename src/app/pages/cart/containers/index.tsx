import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/stores/reducer';
import getTotalPrice from '@app/shared/functions/cart';
import { pricePipe } from '@app/shared/helpers/pipes/price-pipe';
import CartList from './CartList';

export default function Cart() {

  const carts = useSelector((state: RootState) => state.carts.cartList);
  let totalPrice = getTotalPrice(carts);

  return(
    <div className="container cart">
      <div className="grid-left">
        <h2 className="title">Shopping List</h2>
        <CartList />
      </div>
      <div className="grid-right">
        <div className="cart-summary">
          <div className="summary-item">
            <span className="label">Items:</span>
            <span className="value">{carts.length}</span>
          </div>
          <hr className="separator"/>
          <div className="summary-item">
            <span className="label">Total:</span>
            <span className="value">{pricePipe(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
