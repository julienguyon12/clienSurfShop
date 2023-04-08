import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <Link to='/'>Home</Link>
          <Link to='/products/1'>Shortboards</Link>
          <Link to='/products/2'>Longboard</Link>
          <Link to='/products/3'>Funboard</Link>
          <Link to='/products/4'>Accessories</Link>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookie</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            distinctio tenetur pariatur voluptates consectetur itaque quod.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            distinctio tenetur pariatur voluptates consectetur itaque quod.
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>JULIENSTORE</span>
          <span className='copyright'>@ Julien Guyon 2023</span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
