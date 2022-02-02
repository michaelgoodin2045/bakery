import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import cart from '../../assets/shopping-cart-svgrepo-com.svg';
import Hamburger from './Hamburger';
import Links from './Links';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="name">
            <h2>Michael's Bakery</h2>
          </div>
        </div>
      </Link>

      <div className={`NavLinks ${hamburgerOpen ? ' open-menu' : ''}`}>
        <Links closeMenu={closeMenu} />
      </div>
      <div className="nav-end">
        <div className="shopping-cart">
          <img src={cart} alt="" />
        </div>
        <MediaQuery maxWidth={739}>
          <div
            className={`Hamburger ${hamburgerOpen ? ' hamburger-open' : ''}`}
            onClick={toggleHamburger}
          >
            <Hamburger />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Navbar;
