import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import Logo from '././../../images/ymph-logo.png';

import './navbar.css';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left-side">
          <img src={Logo} alt="Young Minds Publication" />
        </div>

        <div className="navbar-middle-side">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/store" className="link">
            YMPH Store
          </Link>
          <Link to="/events" className="link">
            Events
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        <div className="login">
          <Link to="/register" className="link">
            Register
          </Link>
          <Link to="/login">
            <button className="button">{FaSignInAlt}Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
