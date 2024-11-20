import React from 'react';

const ThankYouPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>Thank You!</h1>
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
          Your flight booking with <strong>FlyEase</strong> has been confirmed. We're excited to have you onboard and
          can't wait to serve you on your journey!
        </p>
        <p style={{ fontSize: '16px', color: '#777', marginBottom: '30px' }}>
          A confirmation email with your booking details has been sent to you. Please check your email for further
          instructions.
        </p>
        <div
          style={{
            background: '#007BFF',
            color: '#ffffff',
            padding: '15px',
            borderRadius: '5px',
            fontSize: '16px',
            marginBottom: '20px',
          }}
        >
          Booking ID: <strong>FE12345XYZ</strong>
        </div>
        <p style={{ fontSize: '14px', color: '#999', marginBottom: '30px' }}>
          Keep this Booking ID handy for your reference.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
