import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css'

import Signup from './Components/MainPages/Signup';
import Loginuser from './Components/MainPages/Loginn';
import OTPverify from './Components/MainPages/OTPverify';
import Register from './Components/MainPages/Register';
import Create from './Components/Matrimony/Pages/Create';
import PartnerPreference from './Components/Matrimony/Pages/Preference';
import HomeList from './Components/Matrimony/Pages/HomeList';
import Profile from './Components/Matrimony/Pages/Profile';

import Subscription from './Components/Matrimony/Pages/Subscription';
import UserPage from './Components/Matrimony/Pages/UserPage';
import Chatroom from './Components/Matrimony/Chating/Chatroom';
import SplashScreen from './Components/MainPages/SplashScreen';
import Notifications from './Components/Matrimony/Pages/Notifications';
import ChatPage from './Components/Matrimony/Chating/ChatPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/" element={<Loginuser />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<OTPverify />} />
          <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/preference" element={<PartnerPreference />} />
            <Route path="/homelist" element={<HomeList />} />
        
            <Route path="/profile" element={<Profile />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/userpage/:userId" element={<UserPage />} />
            <Route path="/chatroom" element={<Chatroom />} />
            <Route path="/chatpage" element={<ChatPage />} />
            <Route path="/notification" element={<Notifications />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;