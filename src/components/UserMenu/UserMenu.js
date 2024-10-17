import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

function UserMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="user-menu">
      <button onClick={toggleMenu} className="user-menu-button">
        <span className="material-icons">account_circle</span>
      </button>
      {isOpen && (
        <div className="user-menu-dropdown">
          <Link to="/profile" className="user-menu-item" onClick={toggleMenu}>
            <span className="material-icons">person</span>
            Profile
          </Link>
          <Link to="/settings" className="user-menu-item" onClick={toggleMenu}>
            <span className="material-icons">settings</span>
            Settings
          </Link>
          <button onClick={() => { onLogout(); toggleMenu(); }} className="user-menu-item logout-button">
            <span className="material-icons">exit_to_app</span>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
