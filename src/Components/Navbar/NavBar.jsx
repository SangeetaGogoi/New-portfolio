import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <div className='navBar'>
      <Link to='/' className='leftBar'>
        Sangeeta Gogoi
      </Link>
      <input type='checkbox' id='checkbox' />
      <label for='checkbox' id='icon'>
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </label>
      <ul>
        <div className='rightBar'>
          <li>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' className='link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/contact' className='link'>
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
