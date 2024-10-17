// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Marketplace from './pages/Marketplace/Marketplace';
import Workshop from './pages/Workshop/Workshop';
import Library from './pages/Library/Library';
import Communication from './pages/Communication/Communication';
import UserProfile from './pages/UserProfile/UserProfile';
import LoginModal from './components/LoginModal';
import BottomNav from './components/BottomNav/BottomNav';
import UserMenu from './components/UserMenu/UserMenu';
import './App.css';
import RPGNexusIcon from './assets/images/RPG-nexus.png';
import LoginBackground from './assets/images/Login-bg.jpg';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    setShowLoginModal(true);
  };

  const handleLogin = (username, password) => {
    console.log('Logging in with:', username, password);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/main');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return (
      <div className="login-screen" style={{ backgroundImage: `url(${LoginBackground})` }}>
        {!showLoginModal ? (
          <>
            <h1 id="welcome-text">Welcome to RPG Nexus</h1>
            <img
              src={RPGNexusIcon}
              alt="RPG Nexus Icon"
              className="company-icon-large"
              onClick={() => setShowLoginModal(true)}
            />
          </>
        ) : (
          <LoginModal onLogin={handleLogin} />
        )}
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/library" element={<Library />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
