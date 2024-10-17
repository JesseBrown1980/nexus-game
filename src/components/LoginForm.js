import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const handleTouchStart = (e) => {
    e.currentTarget.style.backgroundColor = '#e0e0e0';
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.style.backgroundColor = '';
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
