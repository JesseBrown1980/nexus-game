import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/main" className="bottom-nav-item">
        <span className="material-icons">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/dashboard" className="bottom-nav-item">
        <span className="material-icons">dashboard</span>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/marketplace" className="bottom-nav-item">
        <span className="material-icons">store</span>
        <span>Marketplace</span>
      </NavLink>
      <NavLink to="/workshop" className="bottom-nav-item">
        <span className="material-icons">build</span>
        <span>Workshop</span>
      </NavLink>
      <NavLink to="/library" className="bottom-nav-item">
        <span className="material-icons">library_books</span>
        <span>Library</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
