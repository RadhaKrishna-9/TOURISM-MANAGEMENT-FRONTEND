import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> {/* Home page link */}
        <li><Link to="/search">Search</Link></li> {/* Search page link */}
        <li><Link to="/transport">Transport</Link></li>
        <li><Link to="/myaccount">My Account</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul className="nav-icons">
        <li>
          <Link to="/login">
            <i className="fas fa-user" title="Login"></i> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i className="fas fa-user-plus" title="Register"></i> Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
