import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Our Story</h2>
        <p className="section-description">
          Discover the passion and tradition behind Casa Brava
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>A Family Tradition Since 1985</h3>
            <p>
              Casa Brava was born from a deep love for authentic Mexican cuisine and a desire to share
              the vibrant flavors of our heritage with the world. Founded by Chef Maria Gonzalez, our
              restaurant has been serving handcrafted dishes made from traditional recipes passed down
              through generations.
            </p>
            <p>
              Every dish tells a story – from our grandmother's mole recipe that takes three days to
              prepare, to our fresh tortillas made daily from organic corn. We source the finest
              ingredients, many imported directly from Mexico, to ensure an authentic experience.
            </p>
            <p>
              Our warm, elegant atmosphere reflects the hospitality of Mexican culture. Whether you're
              celebrating a special occasion or enjoying a casual meal with family, Casa Brava offers
              an unforgettable culinary journey.
            </p>

            <div className="chef-highlight">
              <h3>Meet Our Chef</h3>
              <div className="chef-info">
                <div className="chef-image">
                  <div className="image-placeholder">
                    <span className="chef-initial">MG</span>
                  </div>
                </div>
                <div className="chef-details">
                  <h4>Chef Maria Gonzalez</h4>
                  <p className="chef-title">Executive Chef & Founder</p>
                  <p>
                    With over 30 years of experience in traditional Mexican cuisine, Chef Maria brings
                    passion and authenticity to every dish. Trained in Mexico City and having worked in
                    acclaimed kitchens across Mexico and California, she combines classic techniques with
                    modern presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-content">
                Casa Brava Interior
              </div>
            </div>
          </div>
        </div>

        <div className="hours-section">
          <h3>Opening Hours</h3>
          <div className="hours-grid">
            <div className="hours-item">
              <span className="day">Monday - Thursday</span>
              <span className="time">5:00 PM - 10:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Friday - Saturday</span>
              <span className="time">5:00 PM - 11:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Sunday</span>
              <span className="time">4:00 PM - 9:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="day">Brunch</span>
              <span className="time">Saturday - Sunday, 10:00 AM - 2:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;