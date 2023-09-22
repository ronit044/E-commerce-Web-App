import React, { useState,useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
    const [LogStatus,setLogStatus]=useState(false);
    const userName=localStorage.getItem("userName");
    const pswd=localStorage.getItem("pswd");
    useEffect(() => {
        const userName = localStorage.getItem("userName");
        const pswd = localStorage.getItem("pswd");

        if (userName && pswd) {
            setLogStatus(true);
        } else {
            setLogStatus(false);
        }
    }, []);
    function Logout(){
        localStorage.removeItem("userName");
        localStorage.removeItem("pswd");
        setLogStatus(false);
        window.location.reload();
    }
    return (
        <nav className="navbar-custom">
            <ul className="nav-list-custom">
                <Link to="/"><li className="nav-item-custom">Home</li></Link>
                {!LogStatus?<Link to="/Login"><li className="nav-item-custom">Login/Signup</li></Link>:null}                
                {LogStatus?<Link to="/Cart"><li className="nav-item-custom">Cart</li></Link>:null}
                {LogStatus?<button onClick={Logout}><li className="nav-item-custom">Logout</li></button>:null}
                <Link to="/Cont"><li className="nav-item-custom">Contact</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;
