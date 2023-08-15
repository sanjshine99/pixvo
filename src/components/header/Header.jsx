import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png'
function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="" id="logo" />
        </Link>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link">
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/project" className="nav__link">
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
          <i className="uil nav__close"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
