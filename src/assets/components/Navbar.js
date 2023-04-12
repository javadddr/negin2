import React from 'react';

import './Navbar.css';
import logo from "./logoei.png"

function Navbar() {
  return (
    <div className="navbar">
      
      <img src={logo} alt="Girl in a jacket" width="200" height="115"/>
    </div>
  );
}

export default Navbar;
