import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="header">
        {/* logo on the left -> img */}
       <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </Link>
        {/* search box */}
        <input type="text" className="header__searchInput" />
        {/* the short cut for this is  */}
        {/* 3 links */}
        {/* basket icon with number */}
    </nav>
  )
}

export default Header

// the short cut for this is rafce