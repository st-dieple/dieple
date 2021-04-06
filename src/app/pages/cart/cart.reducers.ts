import * as types from '@app/shared/constant/types';
import { getPriceWithSale } from '@app/shared/functions/cart';

const initialState = {
  cartList: []
}

export default function(state = initialState, {type, payload}) {
  let newCarts = [...state.cartList];

  switch (type) {
    case types.ADD_CART_SUCCESS:
      let ind = state.cartList.findIndex(item => item.id === payload.id);
      if (ind !== -1) {
        newCarts[ind].quantity ++;
      } else {
        let priceWithSale = getPriceWithSale(payload.price, payload.sales);
        newCarts = [...newCarts, {...payload, quantity: 1, priceWithSale: priceWithSale}]
      }
      return {
        ...state,
        cartList: [...newCarts]
      }

    case types.EDIT_CART_SUCCESS:
      let cartIndex = state.cartList.findIndex(item => item.id === payload.productId);
      if (cartIndex !== -1) {
        newCarts[cartIndex].quantity = payload.quantity;
      }
      return {
        ...state,
        cartList: [...newCarts]
      };

    case types.DELETE_CART_SUCCESS:
      state.cartList = state.cartList.filter(item => item.id !== payload);
      return {
        ...state
      }

    default:
      return state;
  }
}
