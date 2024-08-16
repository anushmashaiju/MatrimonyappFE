import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserPage.css';
import MainNavbar from '../MainNavbar';

const UserPage = () => {
    const { userId } = useParams();
    const [basicDetails, setBasicDetails] = useState({});
    const [personalDetails, setPersonalDetails] = useState({});
    const [partnerPreferences, setPartnerPreferences] = useState({});
   

    useEffect(() => {
        document.body.classList.add('body-background');
        return () => {
            document.body.classList.remove('body-background');
        };
    }, []);

    useEffect(() => {
        const fetchBasicDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/user/register-details/${userId}`, { withCredentials: true });
                setBasicDetails(response.data.basicDetails);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        const fetchPersonalDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/user/personal-details/${userId}`, { withCredentials: true });
                setPersonalDetails(response.data);
            } catch (error) {
                console.error('Error fetching personal details:', error);
            }
        };

        const fetchPartnerPreferences = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/user/partnerpreferences/${userId}`, { withCredentials: true });
                setPartnerPreferences(response.data);
            } catch (error) {
                console.error('Error fetching partner preferences:', error);
            }
        };

        fetchBasicDetails();
        fetchPersonalDetails();
        fetchPartnerPreferences();
    }, [userId]);

  
  
    return (
        <>
            <MainNavbar />
            <div className="container">
                <div className="profile-header">
                <div className="profile-pic">
                        {basicDetails.profilePicture ? (
                            <img
                                src={`data:image/jpeg;base64,${basicDetails.profilePicture}`}
                                alt="Profile"
                                className="profile-image"
                            />
                        ) : (
                            <div className="placeholder">No Profile Picture</div>
                        )}
                      
                    </div>
                    <div className="profile-info">
                        <h2>{basicDetails.name || 'User Name'}</h2>
                        <p>{basicDetails.age ? `${basicDetails.age} Yrs` : 'Age'}</p>
                        <p>{personalDetails.height ? `${personalDetails.height} Cm` : 'Height'}</p>
                        <p>{personalDetails.religion && personalDetails.caste ? `${personalDetails.religion}, ${personalDetails.caste}` : 'Religion, Caste'}</p>
                        <p>{basicDetails.qualification || 'Qualification'}</p>
                        <p>{personalDetails.occupation || 'Occupation'}</p>
                        <p>{personalDetails.location ? `${personalDetails.location.state}, ${personalDetails.location.district}` : 'Location'}</p>
                    </div>
                </div>
            
                    <div className="profile-sections">
                        <div className="section">
                            <h3>Basic Details</h3>
                            <div className="details-grid">
                                <p><strong>Name:</strong> {basicDetails.name || 'Add Name'}</p>
                                <p><strong>Age:</strong> {basicDetails.age || 'Add Age'}</p>
                                <p><strong>Height:</strong> {basicDetails.height || 'Add Height'}</p>
                                <p><strong>Hobbies:</strong> {basicDetails.hobbies || 'Add Hobbies'}</p>
                                <p><strong>Interest:</strong> {basicDetails.interest || 'Add Interest'}</p>
                                <p><strong>Drinking Habits:</strong> {basicDetails.drinkingHabits || 'Add Drinking Habits'}</p>
                                <p><strong>Smoking Habits:</strong> {basicDetails.smokingHabits || 'Add Smoking Habits'}</p>
                            </div>
                        </div>
                        <div className="section">
                            <h3>Personal Details</h3>
                            <div className="details-grid">
                                <p><strong>Father's Name:</strong> {personalDetails.fatherName || 'Add Father\'s Name'}</p>
                                <p><strong>Father's Occupation:</strong> {personalDetails.fatherOccupation || 'Add Father\'s Occupation'}</p>
                                <p><strong>Mother's Name:</strong> {personalDetails.motherName || 'Add Mother\'s Name'}</p>
                                <p><strong>Mother's Occupation:</strong> {personalDetails.motherOccupation || 'Add Mother\'s Occupation'}</p>
                                <p><strong>Number of Siblings:</strong> {personalDetails.noOfSiblings || 'Add Number of Siblings'}</p>
                                <p><strong>Number of Brothers:</strong> {personalDetails.noOfBrothers || 'Add Number of Brothers'}</p>
                                <p><strong>Number of Sisters:</strong> {personalDetails.noOfSisters || 'Add Number of Sisters'}</p>
                                <p><strong>Number of Married:</strong> {personalDetails.noOfMarried || 'Add Number of Married'}</p>
                                <p><strong>Number of Unmarried:</strong> {personalDetails.noOfUnmarried || 'Add Number of Unmarried'}</p>
                                <p><strong>Family Class:</strong> {personalDetails.familyClass || 'Add Family Class'}</p>
                                <p><strong>Family Value:</strong> {personalDetails.familyValue || 'Add Family Value'}</p>
                                <p><strong>User Income:</strong> {personalDetails.userIncome || 'Add User Income'}</p>
                                <p><strong>Occupation:</strong> {personalDetails.occupation || 'Add Occupation'}</p>
                                <p><strong>Height:</strong> {personalDetails.height || 'Add Height'}</p>
                                <p><strong>Weight:</strong> {personalDetails.weight || 'Add Weight'}</p>
                                <p><strong>Complexion:</strong> {personalDetails.complexion || 'Add Complexion'}</p>
                                <p><strong>Mother Tongue:</strong> {personalDetails.motherTongue || 'Add Mother Tongue'}</p>
                                <p><strong>Physical Status:</strong> {personalDetails.physicalStatus || 'Add Physical Status'}</p>
                                <p><strong>About:</strong> {personalDetails.about || 'Add About'}</p>
                            </div>
                        </div>
                        <div className="section">
                        <h3>Partner Preferences</h3>
                        <div className="preferences-section">
                        <h4>About Partner</h4>
                        <p> {partnerPreferences.aboutMyPartner|| 'Tell us about your partner'}</p>
                            <h4>Basic Preferences</h4>
                            <p><strong>Age Range:</strong> {partnerPreferences.basic?.ageRange?.min || 'min'} - {partnerPreferences.basic?.ageRange?.max || 'max'}</p>
                            <p><strong>Height:</strong> {partnerPreferences.basic?.height || 'Add Height'}</p>
                            <p><strong>Marital Status:</strong> {partnerPreferences.basic?.maritalStatus || 'Add Marital Status'}</p>
                            <p><strong>Qualification:</strong> {partnerPreferences.professional?.education || 'Add Qualification'}</p>
                            <p><strong>Profession:</strong> {partnerPreferences.professional?.employedIn || 'Add Profession'}</p>
                            <p><strong>Income:</strong> {partnerPreferences.professional?.annualIncome || 'Add Income'}</p>
                            <p><strong>Eating Habits:</strong> {partnerPreferences.basic?.eatingHabits || 'Add Eating Habits'}</p>
                            <p><strong>Drinking Habits:</strong> {partnerPreferences.basic?.drinkingHabits || 'Add Drinking Habits'}</p>
                            <p><strong>Smoking Habits:</strong> {partnerPreferences.basic?.smokingHabits || 'Add Smoking Habits'}</p>
                            <h4>Religion Preferences</h4>
                            <p><strong>Religion:</strong> {partnerPreferences.religious?.religion || 'Add Religion'}</p>
                            <p><strong>Caste:</strong> {partnerPreferences.religious?.caste || 'Add Caste'}</p>
                            <p><strong>Sub-Caste:</strong> {partnerPreferences.religious?.subCaste || 'Add Sub-Caste'}</p>
                            <h4>Location Preferences</h4>
                            <p><strong>State:</strong> {partnerPreferences.location?.state || 'Add State'}</p>
                            <p><strong>District:</strong> {partnerPreferences.location?.district || 'Add Distric'}</p>
                           
                        </div>
                        </div>
                    </div>
            
        </div>
        </>
    );
};

export default UserPage;
