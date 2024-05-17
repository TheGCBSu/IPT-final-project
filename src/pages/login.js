import React, { useState } from 'react';
import './pagestyles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send the login request to the server
      const response = await fetch('http://localhost:1500/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log('Login successful');
        localStorage.setItem('token', token);
        console.log(token)
        window.location.pathname=""
        // Handle successful login
      } else {
        console.error('Login failed:', response.status);
        // Handle failed login
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="centered" align="center">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username-input">Username:</label>
        <input
          type="text"
          id="username-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password-input">Password:</label>
        <input
          type="password"
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
