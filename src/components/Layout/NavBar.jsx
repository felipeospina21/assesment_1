import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul className='navBar__list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/product-detail'>Product Detail</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
