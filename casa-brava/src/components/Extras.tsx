import React, { useState } from 'react';
import './Extras.css';

const Extras: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The best Mexican food I\'ve ever had outside of Mexico! The mole poblano is incredible.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Torres',
      text: 'Authentic flavors and exceptional service. Casa Brava has become our family\'s favorite restaurant.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Chen',
      text: 'The atmosphere is warm and inviting. The chef\'s special tacos al pastor are a must-try!',
      rating: 4,
    },
  ];

  const dailySpecial = {
    name: 'Camarones al Mojo de Ajo',
    description: 'Sautéed shrimp with garlic, white wine, and herbs served with rice and warm tortillas',
    price: '$18.99',
    originalPrice: '$22.99',
  };

  const galleryImages = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    alt: `Restaurant image ${i + 1}`,
  }));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      // Simulate subscription
      console.log('Subscribed with email:', email);
      setIsSubscribed(true);
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section id="extras" className="extras">
      <div className="container">
        <h2>Special Features</h2>
        <p className="section-description">
          Discover what makes Casa Brava unique
        </p>

        {/* Daily Special */}
        <div className="daily-special">
          <h3>Daily Special</h3>
          <div className="special-content">
            <div className="special-image">
              <div className="image-placeholder">
                <span className="special-initial">DS</span>
              </div>
            </div>
            <div className="special-details">
              <h4>{dailySpecial.name}</h4>
              <p className="special-description">{dailySpecial.description}</p>
              <div className="special-pricing">
                <span className="special-price">{dailySpecial.price}</span>
                <span className="original-price">{dailySpecial.originalPrice}</span>
              </div>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h3>What Our Guests Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="gallery">
          <h3>Photo Gallery</h3>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="image-placeholder">
                  <span className="gallery-initial">IMG</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <h3>Join Our Newsletter</h3>
          <p className="newsletter-description">
            Subscribe to receive updates on special events, new menu items, and exclusive offers.
          </p>
          {isSubscribed ? (
            <div className="subscription-success">
              <p>Thank you for subscribing! You'll receive our next newsletter.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Extras;