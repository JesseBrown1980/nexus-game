import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ onLogout }) {
  return (
    <nav className="nav-button-system">
      <Link to="/dashboard" className="nav-button">Dashboard</Link>
      <Link to="/library" className="nav-button">Library</Link>
      <Link to="/marketplace" className="nav-button">Marketplace</Link>
      <Link to="/workshop" className="nav-button">Workshop</Link>
      <Link to="/communication" className="nav-button">Communication</Link>
      <Link to="/profile" className="nav-button">Profile</Link>
      <button onClick={onLogout} className="nav-button">Logout</button>
    </nav>
  );
}

export default Navigation;
