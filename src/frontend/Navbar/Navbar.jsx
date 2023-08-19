import React from 'react';
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to="/"><li className="nav-item">Home</li></Link>
        <Link to="/Login"><li className="nav-item">Login/Signup</li></Link>
        <Link to="/Cart"><li className="nav-item">Cart</li></Link>
        <Link to="/Contact"><li className="nav-item">Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
