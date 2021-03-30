import React, { useState, useEffect } from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-center row container">
        <div className="col-3 footer-block">
          <h3 className="title">Infomation</h3>
          <ul className="footer-list">
            <li>Delivery</li>
            <li>About Us</li>
            <li>Secure Payment</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>
        <div className="col-3 footer-block">
          <h3 className="title">Custom Links</h3>
          <ul className="footer-list">
            <li>Legal Notice</li>
            <li>Prices Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
            <li>Login</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className="col-3 footer-block">
          <h3 className="title">Social Media</h3>
          <ul className="footer-list">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Tumblr</li>
            <li>Pinterest</li>
          </ul>
        </div>
        <div className="col-3 footer-block">
          <h3 className="title">Social Media</h3>
          <ul className="footer-list">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Tumblr</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <h3>© SupremeTech Co., Ltd. 2020</h3>
      </div>
    </footer>
  )
}
