import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Address',
      content: '123 Fiesta Boulevard, Culinary District, CA 90210',
    },
    {
      id: 2,
      icon: '📞',
      title: 'Phone',
      content: '(555) 123-4567',
    },
    {
      id: 3,
      icon: '✉️',
      title: 'Email',
      content: 'info@casabrava.com',
    },
    {
      id: 4,
      icon: '🕒',
      title: 'Reservations',
      content: 'Call or use our online form',
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: 'Facebook',
      url: '#',
      icon: '📘',
    },
    {
      id: 2,
      name: 'Instagram',
      url: '#',
      icon: '📸',
    },
    {
      id: 3,
      name: 'Twitter',
      url: '#',
      icon: '🐦',
    },
    {
      id: 4,
      name: 'Yelp',
      url: '#',
      icon: '⭐',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="section-description">
          We'd love to hear from you. Reach out with any questions or to make a reservation.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-grid">
              {contactInfo.map((info) => (
                <div key={info.id} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-content">
              <h3>Our Location</h3>
              <div className="map-image">
                <div className="map-placeholder-content">
                  <span className="map-icon">🗺️</span>
                  <p>Interactive Map</p>
                  <p className="map-address">123 Fiesta Boulevard, CA 90210</p>
                </div>
              </div>
              <p className="map-note">
                Located in the heart of the Culinary District with convenient parking available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;