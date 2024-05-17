import React, { useState } from 'react';
import './pagestyles.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      // Send the register request to the server
      const response = await fetch('http://localhost:1500/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setSuccessMessage('Registration successful');
        setErrorMessage('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="centered" align="center">
      <h2>Register</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleRegister}>
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
        <label htmlFor="confirm-password-input">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
