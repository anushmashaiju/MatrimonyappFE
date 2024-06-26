import React , {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginuser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
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
        navigate('/profile');
      } else {
        console.error('Login failed');
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8000/auth/google';
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/verify/send-verification', { phoneNumber });
      if (response.data.message === 'Verification sent') {
        setOtpSent(true);
        alert('OTP sent successfully!');
      } else {
        alert('Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/verify/check-verification', { phoneNumber, code:otp });
      if (response.data.message === 'Verification successful') {
        setIsVerified(true);
        alert('OTP verified successfully!');
        // Handle successful verification (e.g., log in the user)
      } else {
        alert('Invalid OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP.');
    }
  };


  return (
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
     
        <button onClick={handleGoogleLogin}>Login with Google</button>
        
        <div style={{ marginTop: '20px' }}>
          <h3>Login with Mobile</h3>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSendOtp} disabled={otpSent}>Send OTP</button>
        </div>

        {otpSent && (
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </div>
        )}

        {isVerified && <p>Phone number verified successfully!</p>}
        <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
    
  )
}

export default Loginuser

