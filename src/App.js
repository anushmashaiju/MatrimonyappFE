import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import './App.css'
import OTPverify from './Pages/OTPverify';
import Employment from './Pages/Employment';
import Relationship from './Pages/Relationship';
import Loginuser from './Pages/Loginn';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import Create from './Pages/Create';
import PartnerPreference from './Pages/Preference';
import ProfilesComponent from './Components/Home';
import ProfileDetails from './Components/ProfileDetails';

import BranchNavbar from './Components/BranchNavbar';
import Profile from './Pages/Profile';
import ChatComponent from './Components/Chat/Chat';
import ChatListComponent from './Components/Chat/ChatList';
import MainChatComponent from './Components/Chat/MainChat';

import { AdminAuth, LoginAuth, UserAuth } from './Authorisation/authorization';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route element={<LoginAuth/>}>
          <Route path="/" element={<Loginuser/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<OTPverify/>} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/employment" element={<Employment/>} /> 
          <Route path="/relationship" element={<Relationship/>} /> 
          <Route path="/matrimony" element={<Welcome/>} />    
          <Route path="/create" element={<Create/>} />
          <Route path="/preference" element={<PartnerPreference/>} />
          <Route path="/home" element={<ProfilesComponent/>} />
          <Route path="/create/:id" element={<ProfileDetails />} />
          <Route path="/branch" element={<BranchNavbar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/chatlist" element={<ChatListComponent />} />
          <Route path="/mainchat" element={<MainChatComponent />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
