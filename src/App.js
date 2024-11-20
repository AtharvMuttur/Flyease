
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import ModifyPage from './components/ModifyPage';
import FlightSearch from './components/FlightSearch';
import BookingPage from './components/BookingPage';
import ThankYouPage from './components/ThankYouPage';
import HelpPage from './components/HelpPage';
import ContactPage from './components/ContactPage'; 
import './App.css';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <AppContent 
        user={user} 
        setUser={setUser} 
        isLoginPage={isLoginPage} 
        setIsLoginPage={setIsLoginPage} 
      />
    </Router>
  );
}

function AppContent({ user, setUser, isLoginPage, setIsLoginPage }) {
  const location = useLocation(); 

  const handleLogin = (email, password) => {
    setUser({ email }); 
  };

  const handleSignup = (email, password) => {
    setUser({ email }); 
  };

  const handleLogout = () => {
    setUser(null);
  };

  const isBookingPage = location.pathname === '/booking';

  return (
    <div className="App">
      {user ? (
        <>
          
          <Routes>
            <Route path="/" element={<MainPage onLogout={handleLogout} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/modify" element={<ModifyPage />} />
            <Route path="/flight-search" element={<FlightSearch />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} /> 
            <Route path="/help" element={<HelpPage />} /> 
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
      ) : (
        <>
          {isLoginPage ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
            <SignupPage onSignup={handleSignup} />
          )}
          <button
            className="switch-button"
            onClick={() => setIsLoginPage(!isLoginPage)}
          >
            {isLoginPage ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
