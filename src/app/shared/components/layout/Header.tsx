import React from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '@app/stores/reducer';
import getTotalPrice from '@app/shared/functions/cart';
import { pricePipe } from '@app/shared/helpers/pipes/price-pipe';

export function Header() {
  const carts = useSelector((state: RootState) => state.carts.cartList);

  let total = getTotalPrice(carts);
  let history = useHistory();

  function handleGotoCart() {
    history.push('/cart');
  }
  
  return (
    <header className="page-header">
      <div className="container page-header-inner">
        <div className="header-item-center">
          <div className="logo">
            <img src="http://demo.posthemes.com/pos_ecolife/layout2/img/ecolife-responsive-prestashop-theme-logo-1580528177.jpg" alt="logo.png" />
          </div>
        </div>
        <ul className="header-item-left nav-menu">
          <li className="nav-menu-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/cart">SHOP</Link>
          </li>
        </ul>
        <ul className="header-item-right nav-menu">
          <li className="nav-menu-item cart-header">
            <NavLink to="/cart" onClick={handleGotoCart}>
              CART
              <span className="total">({pricePipe(total)})</span>
              <span className="cart-number">{carts.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
