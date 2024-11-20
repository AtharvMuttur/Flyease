import React from 'react';
import './styles.css';
import flyeaseIcon from './flyease-icon.png'; 

function Header() {
  return (
    <div className="header">
      <img src={flyeaseIcon} alt="Flyease Icon" className="header-icon" />
      <h1 className="header-title">FlyEase</h1>
    </div>
  );
}

export default Header;
