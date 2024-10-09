import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const { location: destLocation, accommodation, travelMethod } = location.state; // Extract booking details

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [amount, setAmount] = useState(''); // Set amount based on your logic

  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [bankUserId, setBankUserId] = useState('');
  const [bankPassword, setBankPassword] = useState('');
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert(`Payment successful via ${paymentMethod}. Redirecting to receipt...`);
    // Redirect to the receipt page, passing along the details
    navigate('/receipt', { state: { location: destLocation, accommodation, paymentMethod, amount } });
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div>
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="input-field">
            <option value="card">Credit/Debit Card</option>
            <option value="internet-banking">Internet Banking</option>
            <option value="phonepay">PhonePe</option>
            <option value="paytm">Paytm</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required className="input-field" />
            </div>
            <div>
              <label htmlFor="pin">PIN:</label>
              <input type="password" id="pin" value={pin} onChange={(e) => setPin(e.target.value)} required className="input-field" />
            </div>
          </>
        )}

        {paymentMethod === 'internet-banking' && (
          <>
            <div>
              <label htmlFor="bankUserId">User ID:</label>
              <input type="text" id="bankUserId" value={bankUserId} onChange={(e) => setBankUserId(e.target.value)} required className="input-field" />
            </div>
            <div>
              <label htmlFor="bankPassword">Password:</label>
              <input type="password" id="bankPassword" value={bankPassword} onChange={(e) => setBankPassword(e.target.value)} required className="input-field" />
            </div>
          </>
        )}

        {paymentMethod === 'phonepay' && (
          <div>
            <label htmlFor="upiId">UPI ID:</label>
            <input type="text" id="upiId" value={upiId} onChange={(e) => setUpiId(e.target.value)} required className="input-field" />
          </div>
        )}

        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required className="input-field" />
        </div>

        <button type="submit" className="payment-button">Confirm Payment</button>
      </form>
    </div>
  );
};

export default Payment;
