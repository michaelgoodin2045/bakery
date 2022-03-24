import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import cart from '../../assets/shopping-cart-svgrepo-com.svg';
import Hamburger from './Hamburger';
import Links from './Links';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Navbar = ({ totalQty, handleOpenCart }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [displayQty, setDisplayQty] = useState(false);

  useEffect(() => {
    if (totalQty > 0) {
      setDisplayQty(true);
    } else {
      setDisplayQty(false);
    }
  }, [totalQty]);

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
        <div className="shopping-cart" onClick={handleOpenCart}>
          <img src={cart} alt="" />
          <div className={`total-qty ${displayQty ? ' show' : ''}`}>
            <p>{totalQty}</p>
          </div>
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
