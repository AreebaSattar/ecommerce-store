import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart  } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <div className="logo">🌟 GlowGuru</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
        <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link>
      </div>
      <div className="icon-container">
        <FaSearch />
        <FaUser />
        <Link to="/cart" className={`cart-icon-link ${location.pathname === '/cart' ? 'active' : ''}`}>
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
