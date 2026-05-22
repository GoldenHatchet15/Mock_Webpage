import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Authentic Mexican Cuisine</h1>
          <p>
            Experience the vibrant flavors of Mexico with our handcrafted dishes made from
            traditional recipes passed down through generations. At Casa Brava, every meal
            is a celebration of culture and community.
          </p>
          <div className="hero-buttons">
            <a href="#reservations" className="btn">
              Reserve a Table
            </a>
            <a href="#menu" className="btn btn-outline">
              View Menu
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="image-content">
              Casa Brava
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;