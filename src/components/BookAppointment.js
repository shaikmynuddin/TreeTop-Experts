import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Your main CSS file
import bookingBg from '../assets/BG.jpg'; // Your background image

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert(`Thank you, ${formData.name}! Your ${formData.service} appointment is booked.`);
  };

  return (
    <div className="book-appointment-container" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), url(${bookingBg})` 
    }}>
      <div className="book-appointment-form">
        <h2>Book Your Tree Service</h2>
        <p>Fill out the form and we'll contact you to confirm</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Property Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="Tree Cutting/Pruning">Tree Cutting/Pruning</option>
                <option value="Emergency Tree Removal">Emergency Tree Removal</option>
                <option value="Stump Grinding">Stump Grinding</option>
                <option value="Grass Cutting">Grass Cutting</option>
                <option value="Tree Health Assessment">Tree Health Assessment</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="notes"
              placeholder="Special instructions or notes..."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Confirm Booking <span>🡺</span>
          </button>

          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;