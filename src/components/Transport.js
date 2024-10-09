import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './Transport.css'; // Import the CSS file


const tourismPlaces = [
  'Eiffel Tower',
  'Great Wall of China',
  'Machu Picchu',
  'Statue of Liberty',
  'Taj Mahal',
  'Qutub Minar',
  'Red Fort',
  'Gateway of India',
  'Hawa Mahal',
  'Kerala Backwaters',
  'Greenland',
  'Sahara Desert',
  'Tropical Islands',
  'Snow Regions',
];

const accommodationOptions = {
  'Eiffel Tower': ['Hotel',  'Airbnb', 'Boutique Hotel'],
  'Great Wall of China': ['Hotel', 'Guest House', 'Resort'],
  'Machu Picchu': ['Hotel', 'Lodge', 'Eco-Lodge', 'Camping'],
  'Statue of Liberty': ['Hotel', 'Motel', 'Resort'],
  'Taj Mahal': ['Hotel', 'Resort', 'Heritage Hotel', 'Luxury Hotel'],
  'Qutub Minar': [ 'Heritage Hotel', 'Boutique Hotel'],
  'Red Fort': ['Hotel', 'Guest House'],
  'Gateway of India': ['Hotel', 'Luxury Hotel', 'Motel', 'Service Apartment'],
  'Hawa Mahal': ['Hotel', 'Heritage Hotel'],
  'Kerala Backwaters': ['Houseboat', 'Resort', 'Hotel', 'Homestay'],
  'Greenland': ['Hotel', 'Ice Hotel', 'Lodge', 'Guest House'],
  'Sahara Desert': ['Desert Camp', 'Luxury Camp', 'Hotel', 'Lodge'],
  'Tropical Islands': ['Resort', 'Hotel', 'Villa', 'Bungalow'],
  'Snow Regions': ['Chalet', 'Ski Resort', 'Hotel', 'Cabin'],
};



const Transport = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [location, setLocation] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [travelMethod, setTravelMethod] = useState('flight'); // Default method
  const [submitted, setSubmitted] = useState(false); // Track submission
  const [submissionDetails, setSubmissionDetails] = useState(null); // Store submission details

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store submission details
    setSubmissionDetails({ location, accommodation, travelMethod });
    setSubmitted(true);
    // Reset form
    setLocation('');
    setAccommodation('');

    // Redirect to payment page
    navigate('/payment', { state: { submissionDetails } });
  };

  return (
    <section id="transport" className="transport-container">
      <h2>Transport Options</h2>
      <p>Explore various transportation methods.</p>

      {submitted && submissionDetails && (
        <div className="submission-details">
          <h3>Your Booking Details:</h3>
          <p>Destination: {submissionDetails.location}</p>
          <p>Accommodation: {submissionDetails.accommodation}</p>
          <p>Travel Method: {submissionDetails.travelMethod}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="booking-form">
        <div>
          <label htmlFor="location">Destination:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="input-field"
            list="destinations" // Link to the datalist
          />
          <datalist id="destinations">
            {tourismPlaces.map((place) => (
              <option key={place} value={place} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="accommodation">Accommodation Type:</label>
          <select
            id="accommodation"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select Accommodation</option>
            {location && accommodationOptions[location] && accommodationOptions[location].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Travel Method:</label>
          <select value={travelMethod} onChange={(e) => setTravelMethod(e.target.value)} className="input-field">
            <option value="flight">Flight</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        <button type="submit" className="booking-button">Book Now</button>
      </form>
    </section>
  );
};

export default Transport;
