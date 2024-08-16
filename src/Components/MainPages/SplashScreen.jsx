import React from 'react';
import './SplashScreen.css';
import { useNavigate } from 'react-router-dom';

const modules = [
  { name: 'Matrimony ', image: '/Images/mrg.jpg', path: '/matrimony' },

];

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="splash-screen">
      <h1>Welcome to Our Services</h1>
      <div className="card-container">
        {modules.map((module, index) => (
          <div key={index} className="card">
            <img src={module.image} alt={module.name} className="card-image" />
            <div className="card-content">
              <h2>{module.name}</h2>
              <button onClick={() => handleNavigate('/homelist')}>Explore</button>
            </div>
          </div>
        ))}
      </div>
      <div className="login" onClick={() => handleNavigate('/register')}><h1>Go >></h1> </div>
    </div>
  );
};

export default SplashScreen;
