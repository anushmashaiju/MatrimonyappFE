import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Profile from './Pages/profile';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
