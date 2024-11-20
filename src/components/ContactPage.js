import React, { useState } from 'react';

const ContactPage = () => {
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
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#007BFF', marginBottom: '30px' }}>Contact Us</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>Contact Support</h2>
        {formSubmitted ? (
          <p style={{ color: 'green', fontSize: '16px' }}>
            Thank you for reaching out! We'll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Name:<br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    marginTop: '5px',
                  }}
                />
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Email:<br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    marginTop: '5px',
                  }}
                />
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Message:<br />
                <textarea
                  placeholder="Describe your issue"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    marginTop: '5px',
                    minHeight: '100px',
                  }}
                />
              </label>
            </div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Submit
            </button>
          </form>
        )}
      </section>

      <section>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>Customer Support Helpline</h2>
        <p style={{ fontSize: '16px', color: '#555' }}>
          If you need immediate assistance, call us at{' '}
          <strong style={{ color: '#007BFF' }}>1800-123-4567</strong>. Our support team is available 24/7.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
