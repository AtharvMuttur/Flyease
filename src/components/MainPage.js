import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import flyeaseIcon from './flyease-icon.png'; 
import FlightSearch from './FlightSearch'; 

function MainPage({ onLogout }) {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate(); 

  const handleSearchResults = (matchedFlights) => {
    setFlights(matchedFlights); 
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleBookNow = (flight) => {
    navigate('/booking', { state: { flight } }); 
  };

  return (
    <div className="main-page">
      <header className="header">
        <div className="logo-section">
          <img src={flyeaseIcon} alt="Flyease Icon" className="logo-icon" />
          <h1 className="logo-title">FlyEase</h1>
        </div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/modify" className="nav-link">Modify</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </header>

      <div className="welcome-section">
        <h2>Welcome to FlyEase!</h2>
        <p>This is your main dashboard. Here you can learn more about FlyEase, explore features, and manage your account.</p>
      </div>

      <FlightSearch onSearch={handleSearchResults} />

      <div className="flights-results">
        <h3>Matched Flights</h3>
        {flights.length > 0 ? (
          <ul className="flight-list">
            {flights.map((flight) => (
              <li key={flight.flight_number} className="flight-item">
                <div className="flight-info">
                  <strong>{flight.flight_number}</strong> - {flight.departure_city} to {flight.destination_city}
                  <br /><br />
                  <span className="airline-name">{flight.airline_name}</span><br />
                  <span className="flight-times">
                    Departure: {formatDate(flight.departure_time)} | Arrival: {formatDate(flight.arrival_time)}
                  </span><br />
                  <span className="flight-price">₹{flight.price}</span>
                </div>
                <div className="flight-actions">
                  <button className="book-now-button" onClick={() => handleBookNow(flight)}>
                    Book Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights found. Try a different search.</p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
