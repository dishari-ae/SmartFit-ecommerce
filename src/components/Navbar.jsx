import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            SmartFit
          </Link>
          <div className='menu-icon'>
          </div>
          <ul className= 'nav-menu'>
            <li className='nav-item'>
              <Link to='/men' className='nav-links'>
                Men
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/women'
                className='nav-links'
              >
                Women
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/kids'
                className='nav-links'
              >
                Kids
              </Link>
            </li>
            </ul><ul className= 'nav-menu2'>
            <li className='nav-item2'>
              <Link
                to='/cart'
                className='nav-links2'
              >
                Cart
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li className='nav-item2'>
              <Link
                to='/signup'
                className='nav-links2'
              >
                Sign Up
                <i class="fa fa-user-circle" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;