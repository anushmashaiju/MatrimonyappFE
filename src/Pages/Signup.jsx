import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Pages/pages.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/auth/signup', {
        firstName,
        lastName,
        gender,
        phone,
        dob,
        email,
        password
      });

      if (response.status === 201) {
        console.log('User created:', response.data);
        navigate('/login');
      } else {
        console.error('Signup failed');
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the 2xx range
        console.error('Error response:', error.response);
        setError(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        setError('No response from the server. Please try again later.');
      } else {
        // Something else happened in setting up the request
        console.error('Error:', error.message);
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Welcome to Learnbuds Matrimony</h2>
      <h3>Signup</h3>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="column">
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="column">
            <label>Date of Birth:</label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Phone Number:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="column">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="column">
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default Signup;
