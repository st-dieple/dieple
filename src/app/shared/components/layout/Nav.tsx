import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/auth/register">
            Snacks & Fast Food
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home">
            Fresh Vegetables
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">
            Fresh Fruits
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            Fresh Meat
          </Link>
        </li>
      </ul>
    </nav>
  )
}
