import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1162/1162499.png"
          alt="logo"
        />
        <p>UrbanThreads</p>
      </div>

      <ul className="nav-menu">
        <li className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
        </li>

        <li className={menu === "mens" ? "active" : ""} onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
        </li>

        <li className={menu === "womens" ? "active" : ""} onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
        </li>

        <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart" className="cart-icon">
          <img
            src="https://img.icons8.com/?size=48&id=85080&format=png"
            alt="cart"
          />
          {getTotalCartItems() > 0 && (
            <span className="cart-count">
              {getTotalCartItems()}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
