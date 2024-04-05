import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink from react-router-hash-link
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <Link smooth to="#explore-menu"><button>View Menu</button></Link> {/* Use HashLink */}
      </div>
    </div>
  );
};

export default Header;
