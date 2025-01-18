import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../navbar/navbar.css";
import ball from '../../image/3D-soccer-ball-on-transparent-background-PNG-removebg-preview.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="nav-header">
            <div className="nav-logo">
                <img 
                    src={ball} 
                    alt="Football Logo"
                />
                <h1 className="nav-title">ASTU League</h1>
            </div>
            <button className="nav-toggle" onClick={toggleMenu}>
            ☰
            </button>
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/clubs">Teams</Link></li>
                    <li className="nav-item"><Link to="/live">Live</Link></li>
                    <li className="nav-item"><Link to="/">About</Link></li>
                    <li className="nav-item"><Link to="/">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
