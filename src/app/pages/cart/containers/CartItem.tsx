import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPriceWithSale, getItemTotalPrice } from '@app/shared/functions/cart';
import { ProductInCart } from '@app/shared/constant/entity/productInCart';
import { pricePipe } from '@app/shared/helpers/pipes/price-pipe';
import { editCart, deleteCart } from '../cart.actions';


interface Props {
  product: ProductInCart
}

export default function CartItem(props: Props) {

  const { product } = props;
  const [cartState, setCartState] = React.useState({productId: product.id, quantity: product.quantity});
  const dispatch = useDispatch();

  let priceWithSale = getPriceWithSale(product.price, product.sales);
  let totalPrice = priceWithSale ? getItemTotalPrice(priceWithSale, cartState.quantity) : getItemTotalPrice(product.price, cartState.quantity);

  const handleEditQuantity = (increase: boolean = true) => {
    let cartInfo = {...cartState};
    if (!increase && cartInfo.quantity <= 1) return;
    cartInfo.quantity  = increase ? cartInfo.quantity + 1 : cartInfo.quantity - 1 ;
    setCartState(cartInfo);
  }
  
  const handleOnChange = (event) => {
    setCartState({...cartState, quantity: event.target.value});
  }

  const handleDeleteItem = () => {
    dispatch(deleteCart(product.id))
  }

  useEffect(() => {
    dispatch(editCart(cartState));
  }, [cartState])

  return(
    <div className="cart-item">
      <div className='row'>
        <div className="col-2">
          <div className="product-image">
            <img src={product.cover} alt={product.name}/>
          </div>
        </div>
        <div className="col-4 product-info">
          <p className="product-name txt-bold">{product.name}</p>
          { priceWithSale !== 0 ? (
            <p className="product-price">
              <span className="">{pricePipe(priceWithSale)}</span>
              <span className="txt-remove txt-mute">{pricePipe(product.price)}</span>
            </p>
            ) :
            (
              <p className="product-price">
                <span>{pricePipe(product.price)}</span>
            </p>
            )
          }
        </div>
        <div className="col-3 txt-right">
          <div className="quantity">
            <span className="qty-decrease qty-disable" onClick={() => handleEditQuantity(false)}>
              <i className="fa fa-minus"></i>
            </span>
            <input type="number" value={cartState.quantity} onChange={handleOnChange}/>
            <span className="qty-increase" onClick={() => handleEditQuantity()}>
              <i className="fa fa-plus"></i>
            </span>
          </div>
        </div>
        <div className="col-2">
          <p className="product-price txt-bold txt-right">{pricePipe(totalPrice)}</p>
        </div>
        <div className="col-1 action">
          <button className="btn btn-icon btn-delete" onClick={handleDeleteItem}>
            <span className="fa fa-trash"></span>
          </button>
        </div>

      </div>
    </div>
  )
}
