// Receipt.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Receipt.css';

const Receipt = () => {
  const location = useLocation();
  const { location: destLocation, accommodation, paymentMethod, amount } = location.state;

  return (
    <div className="receipt-container">
      <h2>Booking Confirmation</h2>
      <div className="receipt-details">
        <p><strong>Destination:</strong> {destLocation}</p>
        <p><strong>Accommodation:</strong> {accommodation}</p>
        <p><strong>Payment Method:</strong> {paymentMethod}</p>
        <p><strong>Amount Paid:</strong> ₹{amount}</p>
      </div>
      <div className="thank-you">
        <p>Thank you for your booking!</p>
      </div>
    </div>
  );
};

export default Receipt;
