import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/auth/signup', {
        firstName,
        lastName,
        email,
        password,
      },{ withCredentials: true });

      if (response.status === 201) {
        // Token is automatically set in cookie, no action needed here
        navigate('/otpverify');
      } else {
        console.error('Signup failed');
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response);
        setError(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setError('No response from the server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8000/auth/google';
  };

  return (
    <div className="container">
      <h2>Welcome to Matrimony app</h2>
      <h3>Signup</h3>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="column">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="column">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="button3" type="submit">Signup</button>
        <p>OR</p>
        <button className="button3" onClick={handleGoogleLogin}>Login with Google</button>
        <p>Already have an account? <a href="/">Login</a></p>
      </form>
    </div>
  );
}

export default Signup;
