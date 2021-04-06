import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/stores/reducer';
import CartItem from './CartItem';

export default function CartList(props) {
  let carts = useSelector((state: RootState) => state.carts.cartList);
  return(
    <div>
      {
        (carts.length) ? (
          carts.map(item =>
            <CartItem product={item}
                      key={item.id}/>)
        ) : (
          <h2>No item in cart</h2>
        )
      }
    </div>
  )
}
