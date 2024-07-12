import React from 'react';
import { useNavigate } from 'react-router-dom';


const Relationship = () => {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate('/matrimony'); // Redirect to the next page
     };
    const handleLongTermClick = () => {
        navigate('/matrimony'); // Navigate to matrimony app
    };

    const handleShortTermClick = () => {
        navigate('/dating'); // Navigate to dating app
    };

    return (
        <div className="relationship-page">
            <h1>Relationship</h1>
            <div>
            <button className="relationship-button" onClick={handleShortTermClick}>
                    Short Term Relationship
                </button>
   
                <button className="relationship-button" onClick={handleLongTermClick}>
                    Long Term Relationship 
                </button>
                <button className='nextbutton' onClick={handleNextClick}>skip</button>
            </div>
        </div>
    );
};

export default Relationship;
