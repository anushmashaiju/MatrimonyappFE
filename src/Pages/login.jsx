import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../Pages/pages.css';

const clientId ='353235404098-b2bnk8pk1ciq0lvcsnouioggon4t2p1k.apps.googleusercontent.com';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const data = response.data;
        console.log('User logged in:', data);
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        console.error('Login failed');
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    try {
      // Exchange the Google ID token for a JWT token from your server
      const res = await axios.post('http://localhost:8000/auth/google', {
        token: response.credential,
      });

      if (res.status === 200) {
        const data = res.data;
        console.log('[Google Login Success]', data);
        localStorage.setItem('token', data.token);
        navigate('/subscription');
      } else {
        console.error('Google login failed');
        alert('Google login failed. Please try again.');
      }
    } catch (error) {
      console.error('[Google Login Failure]', error);
      alert('Google login failed. Please try again.');
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('[Google Login Failure]', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="container">
        <h2>Welcome to Learnbuds Matrimony</h2>
        <h3>Login</h3>
        <form onSubmit={handleEmailPasswordLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
        <p>Don't have an account? <a href="/signup">Signup</a></p>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
