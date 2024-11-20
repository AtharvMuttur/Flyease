import React, { useState } from 'react';

const HelpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#007BFF', marginBottom: '30px' }}>Help & Support</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>FAQs</h2>
        <div>
          <h4 style={{ color: '#007BFF', marginBottom: '10px' }}>1. How can I change my flight?</h4>
          <p style={{ color: '#555' }}>
            You can change your flight by visiting the "Modify" section on our website. Please note that change
            fees may apply.
          </p>

          <h4 style={{ color: '#007BFF', marginBottom: '10px', marginTop: '20px' }}>2. How do I get a refund?</h4>
          <p style={{ color: '#555' }}>
            Refunds can be requested through the "Modify" page if your ticket qualifies for a refund. Refer to
            our refund policy for more details.
          </p>

          <h4 style={{ color: '#007BFF', marginBottom: '10px', marginTop: '20px' }}>3. What are FlyEase's contact details?</h4>
          <p style={{ color: '#555' }}>
            You can reach us at our customer support helpline: <strong>1800-123-4567</strong> or email us at{' '}
            <strong>support@flyease.com</strong>.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default HelpPage;
