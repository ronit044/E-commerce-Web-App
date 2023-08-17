import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Login/Signup</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Cart</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
