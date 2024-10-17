// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink to="/dashboard" className="sidebar-item">
        Dashboard
      </NavLink>
      <NavLink to="/marketplace" className="sidebar-item">
        Marketplace
      </NavLink>
      <NavLink to="/workshop" className="sidebar-item">
        Workshop
      </NavLink>
      <NavLink to="/library" className="sidebar-item">
        Library
      </NavLink>
      <NavLink to="/communication" className="sidebar-item">
        Communication
      </NavLink>
      <NavLink to="/profile" className="sidebar-item">
        Profile
      </NavLink>
    </nav>
  );
}

export default Sidebar;
