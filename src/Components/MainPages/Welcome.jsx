import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    
    const handleNextClick = () => {
        navigate('/homelist'); // Redirect to the next page
     };
    const handleYesClick = () => {
        navigate('/homelist');
    };

    const handleNoClick = () => {
        navigate('/relationship');
    };

    return (
        <div className="welcome-background">
            <div>
            <h1>Welcome to Matrimony App!</h1>
                <p>Are you interested in exploring the Matrimony App?</p>
                <button className='' onClick={handleYesClick}>Yes</button>
                <button  onClick={handleNoClick}>No</button>
         </div>
         <button className='nextbutton' onClick={handleNextClick}>skip</button>
</div>
    );
};

export default Welcome;
