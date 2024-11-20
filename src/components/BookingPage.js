import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [cardNumber, setCardNumber] = useState('');
  const [upiMobile, setUpiMobile] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!name || !email || !paymentMethod || (paymentMethod === 'Card' && !cardNumber) || (paymentMethod === 'UPI' && !upiMobile)) {
      alert('Please fill in all details and payment information.');
      return;
    }

    setPaymentMessage('Payment request has been sent');
    
    setTimeout(() => {
      navigate('/thank-you');
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Booking Page</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>
          Name:<br />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </label>
        <label>
          Email:<br />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </label>
      </div>

      <h3>Select Payment Method</h3>
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="radio"
            value="Card"
            checked={paymentMethod === 'Card'}
            onChange={() => setPaymentMethod('Card')}
          />
          Card
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === 'UPI'}
            onChange={() => setPaymentMethod('UPI')}
          />
          UPI
        </label>
      </div>

      {paymentMethod === 'Card' ? (
        <div className="field" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{ flex: 1, padding: '8px' }}
          />
        </div>
      ) : (
        <div className="field" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={upiMobile}
            onChange={(e) => setUpiMobile(e.target.value)}
            style={{ flex: 1, padding: '8px' }}
          />
        </div>
      )}

      <button
        onClick={handleBooking}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Finalize Booking
      </button>

      {paymentMessage && (
        <p style={{ color: 'green', marginTop: '15px' }}>{paymentMessage}</p>
      )}
    </div>
  );
};

export default BookingPage;
