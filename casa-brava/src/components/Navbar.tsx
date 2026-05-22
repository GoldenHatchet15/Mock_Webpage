import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, label: 'Home', href: '#hero' },
    { id: 2, label: 'Menu', href: '#menu' },
    { id: 3, label: 'About', href: '#about' },
    { id: 4, label: 'Reservations', href: '#reservations' },
    { id: 5, label: 'Tip Calculator', href: '#tip-calculator' },
    { id: 6, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Casa Brava</h2>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;