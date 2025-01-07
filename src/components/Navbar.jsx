import { useState } from 'react';
import './Navbar.css';

function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <nav>
            <img src="/Logo-AA.png" alt="logo" className="logo" />

            <div className="hamburger-menu" onClick={toggleMenu}>
                <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </div>

            <ul className={isMenuOpen ? 'menu-open' : ''}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
