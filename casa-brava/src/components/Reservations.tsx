import React, { useState } from 'react';
import { FormData, FormErrors } from '../types';
import './Reservations.css';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    seating: 'indoor',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    if (!formData.guests) {
      newErrors.guests = 'Number of guests is required';
    } else if (isNaN(Number(formData.guests)) || Number(formData.guests) < 1) {
      newErrors.guests = 'Number of guests must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Form is valid, simulate submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          seating: 'indoor',
          specialRequest: '',
        });
      }, 5000);
    }
  };

  return (
    <section id="reservations" className="reservations">
      <div className="container">
        <h2>Make a Reservation</h2>
        <p className="section-description">
          Reserve your table at Casa Brava and experience authentic Mexican cuisine in an elegant setting
        </p>

        {isSubmitted ? (
          <div className="reservation-success">
            <h3>Reservation Confirmed!</h3>
            <p>Thank you for your reservation, {formData.fullName}. We look forward to welcoming you to Casa Brava.</p>
            <p>A confirmation has been sent to {formData.email}.</p>
            <button className="btn" onClick={() => setIsSubmitted(false)}>
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'form-input-error' : ''}`}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <div className="form-error">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="guests" className="form-label">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  className={`form-select ${errors.guests ? 'form-input-error' : ''}`}
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="9">9+ Guests (Please call)</option>
                </select>
                {errors.guests && <div className="form-error">{errors.guests}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={`form-input ${errors.date ? 'form-input-error' : ''}`}
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <div className="form-error">{errors.date}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="time" className="form-label">
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  className={`form-select ${errors.time ? 'form-input-error' : ''}`}
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select a time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
                {errors.time && <div className="form-error">{errors.time}</div>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Seating Preference</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="seating"
                    value="indoor"
                    checked={formData.seating === 'indoor'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Indoor
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="seating"
                    value="outdoor"
                    checked={formData.seating === 'outdoor'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Outdoor
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequest" className="form-label">
                Special Requests
              </label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                className="form-textarea"
                value={formData.specialRequest}
                onChange={handleChange}
                placeholder="Any special requests or dietary restrictions?"
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Reserve Table
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Reservations;