import React, { useState } from 'react';
import './styles.css';

function FlightSearch({ onSearch }) {
  const [tripType, setTripType] = useState('One Way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState('');
  const [error, setError] = useState(null);

  const handleSearchClick = async () => {
    if (!from || !to || !departure) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch(
        `/api/search?departure=${from}&destination=${to}`
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const flights = await response.json();
      onSearch(flights); 
      setError(null); 
    } catch (err) {
      console.error('Error fetching flights:', err);
      setError('Failed to fetch flights. Please try again.');
    }
  };

  return (
    <div className="flight-search-page">
      <div className="tabs">
        <div className="tab active">Flights</div>
      </div>

      <div className="search-container">
        <h2>Book Your Flight Tickets Now!</h2>
        <div className="search-box">
          <div className="trip-type">
            <button
              className={tripType === 'One Way' ? 'active' : ''}
              onClick={() => setTripType('One Way')}
            >
              One Way
            </button>
            <button
              className={tripType === 'Round Trip' ? 'active' : ''}
              onClick={() => setTripType('Round Trip')}
            >
              Round Trip
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="search-fields">
            <div className="field">
              <label>From</label>
              <input
                type="text"
                placeholder="Enter departure city"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="field">
              <label>To</label>
              <input
                type="text"
                placeholder="Enter destination city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Departure</label>
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
            {tripType === 'Round Trip' && (
              <div className="field">
                <label>Return</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            )}
            <div className="field">
              <label>Travellers & Class</label>
              <input
                type="text"
                placeholder="e.g., 1 Traveller, Economy"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
              />
            </div>
            <button className="search-button" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;
