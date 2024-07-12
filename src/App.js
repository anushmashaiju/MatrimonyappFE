import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css'

import Signup from './Components/MainPages/Signup';
import Loginuser from './Components/MainPages/Loginn';
import OTPverify from './Components/MainPages/OTPverify';
import Register from './Components/MainPages/Register';
import Employment from './Components/MainPages/Employment';
import Create from './Components/Matrimony/Pages/Create';
import PartnerPreference from './Components/Matrimony/Pages/Preference';
import HomeList from './Components/Matrimony/Pages/HomeList';
import Profile from './Components/Matrimony/Pages/Profile';
import Relationship from './Components/MainPages/Relationship';
import Welcome from './Components/MainPages/Welcome';
import BranchNavbar from './Components/Matrimony/BranchNavbar';
import ChatComponent from './Components/Chat/Chat';
import ChatListComponent from './Components/Chat/ChatList';
import MainChatComponent from './Components/Chat/MainChat';
import Subscription from './Components/Matrimony/Pages/Subscription';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      
          <Route path="/" element={<Loginuser/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<OTPverify/>} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/employment" element={<Employment/>} /> 
          <Route path="/relationship" element={<Relationship/>} /> 
          <Route path="/matrimony" element={<Welcome/>} />    
          <Route path="/create" element={<Create/>} />
          <Route path="/preference" element={<PartnerPreference/>} />
          <Route path="/homelist" element={<HomeList/>} />
          <Route path="/branch" element={<BranchNavbar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/chatlist" element={<ChatListComponent />} />
          <Route path="/mainchat" element={<MainChatComponent />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/homelist" element={<HomeList />} />
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;