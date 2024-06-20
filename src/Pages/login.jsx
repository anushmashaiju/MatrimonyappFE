import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../Pages/pages.css';

const clientId = 'YOUR_GOOGLE_CLIENT_ID';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User logged in:', data);
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

  const handleGoogleLoginSuccess = (response) => {
    console.log('[Google Login Success]', response);
    navigate('/dashboard');
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
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
