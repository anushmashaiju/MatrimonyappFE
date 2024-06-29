import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Signup from './Pages/Signup';
import './App.css'
import OTPverify from './Pages/OTPverify';
import Employment from './Pages/Employment';
import Relationship from './Pages/Relationship';
import Splash from './Pages/Splash';
import Profile from './Pages/Profiles';
import Loginuser from './Pages/Loginn';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loginuser/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<OTPverify/>} /> 
          <Route path="/employment" element={<Employment/>} /> 
          <Route path="/relationship" element={<Relationship/>} /> 
          <Route path="/matrimony" element={<Splash/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
