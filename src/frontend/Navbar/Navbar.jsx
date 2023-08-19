import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar-custom">
            <ul className="nav-list-custom">
                <Link to="/"><li className="nav-item-custom">Home</li></Link>
                <Link to="/Login"><li className="nav-item-custom">Login/Signup</li></Link>
                <Link to="/Cart"><li className="nav-item-custom">Cart</li></Link>
                <Link to="/Contact"><li className="nav-item-custom">Contact</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;
