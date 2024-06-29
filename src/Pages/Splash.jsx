import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const [isInteresting, setIsInteresting] = useState(null);
    const navigate = useNavigate();
    const handleYesClick = () => {
        setIsInteresting(true);
    };

    const handleNoClick = () => {
        setIsInteresting(false);
    };

    const handleContinue = () => {
        if (isInteresting === null) {
            alert('Please select if you find it interesting.');
            return;
        }

        if (isInteresting) {
            navigate('/matrimony/welcome');
        } else {
            navigate('/matrimony/not-interesting');
        }
    };

    return (
        <div className="splash-container">
            <h1>Welcome to Matrimony App!</h1>
            <div className="splash-content">
                <p>Are you interested in exploring the Matrimony App?</p>
                <button className="splash-button" onClick={handleYesClick}>Yes</button>
                <button className="splash-button" onClick={handleNoClick}>No</button>
                {isInteresting !== null && (
                    <button className="continue-button" onClick={handleContinue}>Continue</button>
                )}
            </div>
        </div>
    );
};

export default Splash;
