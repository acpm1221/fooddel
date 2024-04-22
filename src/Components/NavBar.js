import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./geeks.png"; // Import the image
import "./NavBar.css";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='mainDiv'>
            <div className='left'>
                <img src={logo} alt="logo" />
            </div>
            <div className="smallMenu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='menu'>
                <ul className={menuOpen ? "open" : ""}>
                    <li><Link style={{ color: "rgb(59 130 246)" }} to="/">Home</Link></li>
                    <li><Link to="/quotes">Quotes</Link></li>
                    <li><Link to="/ResturantHomePage">Restaurants</Link></li>
                    <li>Foods</li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className='right'>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Nav;
