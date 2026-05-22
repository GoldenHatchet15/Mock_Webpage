import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const quickLinks = [
    { id: 1, name: 'Home', href: '#hero' },
    { id: 2, name: 'Menu', href: '#menu' },
    { id: 3, name: 'About', href: '#about' },
    { id: 4, name: 'Reservations', href: '#reservations' },
    { id: 5, name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2>Casa Brava</h2>
            <p className="footer-description">
              Authentic Mexican cuisine crafted with passion and tradition since 1985.
            </p>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Casa Brava Restaurant. All rights reserved.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-hours">
            <h3>Opening Hours</h3>
            <ul>
              <li>
                <span>Mon-Thu:</span> <span>5:00 PM - 10:00 PM</span>
              </li>
              <li>
                <span>Fri-Sat:</span> <span>5:00 PM - 11:00 PM</span>
              </li>
              <li>
                <span>Sunday:</span> <span>4:00 PM - 9:00 PM</span>
              </li>
              <li>
                <span>Brunch:</span> <span>Sat-Sun, 10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;