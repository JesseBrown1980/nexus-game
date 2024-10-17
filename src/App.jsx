import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Marketplace from './pages/Marketplace/Marketplace';
import Workshop from './pages/Workshop/Workshop';
import Library from './pages/Library/Library';
import Communication from './pages/Communication/Communication';
import UserProfile from './pages/UserProfile/UserProfile';
import LoginModal from './components/LoginModal';
import BottomNav from './components/BottomNav/BottomNav';
import './App.css';
import RPGNexusIcon from './assets/images/RPG-nexus.png';
import LoginBackground from './assets/images/Login-bg.jpg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate, location]);

  const handleLogin = (username, password) => {
    console.log('Logging in with:', username, password);
    // Implement actual authentication logic here
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setShowLoginModal(false);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-screen" style={{ backgroundImage: `url(${LoginBackground})` }}>
        {!showLoginModal ? (
          <img
            src={RPGNexusIcon}
            alt="RPG Nexus Icon"
            className="company-icon-large"
            onClick={() => setShowLoginModal(true)}
          />
        ) : (
          <LoginModal onLogin={handleLogin} />
        )}
      </div>
    );
  }

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/library" element={<Library />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
      <BottomNav onLogout={handleLogout} />
    </div>
  );
}

export default App;
