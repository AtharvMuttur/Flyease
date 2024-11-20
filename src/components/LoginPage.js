import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom'; 

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        onLogin();  
        
        navigate('/');  
      } else {
        setError(data.message);  
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <Header />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red', fontSize: '16px' }}>{error}</p>} 
    </div>
  );
}

export default LoginPage;
