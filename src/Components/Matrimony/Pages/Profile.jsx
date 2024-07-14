
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainNavbar from '../MainNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './Profile.css'; // Import CSS for component-specific styles
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [basicDetails, setBasicDetails] = useState({});
    const [personalDetails, setPersonalDetails] = useState({});
    const [partnerPreferences, setPartnerPreferences] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Add the background class to the body
        document.body.classList.add('body-background');

        // Remove the background class when the component is unmounted
        return () => {
            document.body.classList.remove('body-background');
        };
    }, []);

    useEffect(() => {
        const fetchBasicDetails = async (userId) => {
            try {
                const response = await axios.get(`http://localhost:8000/user/register-details/${userId}}`,{ withCredentials: true })
                setBasicDetails(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching basic details:', error);
            }
        };

        const fetchPersonalDetails = async (userId) => {
            try {
                const response = await axios.get(`http://localhost:8000/user/personal-details/${userId}`,{ withCredentials: true });
                setPersonalDetails(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching personal details:', error);
            }
        };

        const fetchPartnerPreferences = async (userId) => {
            try {
                const response = await axios.get(`http://localhost:8000/user/partnerpreferences/${userId}`,{ withCredentials: true });
                setPartnerPreferences(response.data);
            } catch (error) {
                console.error('Error fetching partner preferences:', error);
            }
        };

        // Assuming userId is obtained from your authentication or props


        // Call the functions to fetch data
        fetchBasicDetails();
        fetchPersonalDetails();
        fetchPartnerPreferences();
    }, []);

    const handleEdit = () => {
        alert('Implement your edit functionality here!');
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Redirect to the next page
    };

    const handleCreateClick = () => {
        navigate('/create');
    };

    const handlePreferenceClick = () => {
        navigate('/preference');
    };

    return (
        <>
            <MainNavbar />
            <div className="container">
                <div className="profile-header">
                    <div className="profile-pic">
                        {/* Display profile picture*/ }
                        {basicDetails.profilePicture ? (
                            <img src={basicDetails.profilePicture} alt="Profile" />
                        ) : (
                            <div className="placeholder">No Profile Picture</div>
                        )}
                        <button className="edit-photo-btn" onClick={handleEdit}>
                            Edit Profile Picture
                        </button>
                    </div>
                    <div className="profile-info">
                        <h2>{basicDetails?.name || 'User Name'}</h2>
                        <p>{basicDetails?.age ? `${basicDetails.age} Yrs` : 'Age'}</p>
                        <p>{personalDetails?.height ? `${personalDetails.height} Cm` : 'Height'}</p>
                        <p>{personalDetails ? `${personalDetails.religion}, ${personalDetails.caste}` : 'Religion, Caste'}</p>
                        <p>{basicDetails?.qualification || 'Qualification'}</p>
                        <p>{personalDetails?.occupation || 'Occupation'}</p>
                        <p>{personalDetails?.location?.district || 'District:'}</p>
                    </div>
                </div>
                <div className="profile-sections">
                    <div className="section">
                        <h3>Basic Details</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handleRegisterClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="details-grid">
                            <p><strong>Name:</strong> {basicDetails?.name || 'Add Name'}</p>
                            <p><strong>Age:</strong> {basicDetails?.age || 'Add Age'}</p>
                            <p><strong>Height:</strong> {basicDetails?.height || 'Add Height'}</p>
                            <p><strong>Hobbies:</strong> {basicDetails?.hobbies || 'Add Hobbies'}</p>
                            <p><strong>Interest:</strong> {basicDetails?.interest || 'Add Interest'}</p>
                            <p><strong>Drinking Habits:</strong> {basicDetails?.drinkingHabits || 'Add Drinking Habits'}</p>
                            <p><strong>Smoking Habits:</strong> {basicDetails?.smokingHabits || 'Add Smoking Habits'}</p>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Personal Details</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handleCreateClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="details-grid">
                            <p><strong>Father's Name:</strong> {personalDetails?.fatherName || 'Add Father\'s Name'}</p>
                            <p><strong>Father's Occupation:</strong> {personalDetails?.fatherOccupation || 'Add Father\'s Occupation'}</p>
                            <p><strong>Mother's Name:</strong> {personalDetails?.motherName || 'Add Mother\'s Name'}</p>
                            <p><strong>Mother's Occupation:</strong> {personalDetails?.motherOccupation || 'Add Mother\'s Occupation'}</p>
                            <p><strong>Number of Siblings:</strong> {personalDetails?.noOfSiblings || 'Add Number of Siblings'}</p>
                            <p><strong>Number of Brothers:</strong> {personalDetails?.noOfBrothers || 'Add Number of Brothers'}</p>
                            <p><strong>Number of Sisters:</strong> {personalDetails?.noOfSisters || 'Add Number of Sisters'}</p>
                            <p><strong>Number of Married:</strong> {personalDetails?.noOfMarried || 'Add Number of Married'}</p>
                            <p><strong>Number of Unmarried:</strong> {personalDetails?.noOfUnmarried || 'Add Number of Unmarried'}</p>
                            <p><strong>Family Class:</strong> {personalDetails?.familyClass || 'Add Family Class'}</p>
                            <p><strong>Family Value:</strong> {personalDetails?.familyValue || 'Add Family Value'}</p>
                            <p><strong>User Income:</strong> {personalDetails?.userIncome || 'Add User Income'}</p>
                            <p><strong>Occupation:</strong> {personalDetails?.occupation || 'Add Occupation'}</p>
                            <p><strong>Height:</strong> {personalDetails?.height || 'Add Height'}</p>
                            <p><strong>Weight:</strong> {personalDetails?.weight || 'Add Weight'}</p>
                            <p><strong>Complexion:</strong> {personalDetails?.complexion || 'Add Complexion'}</p>
                            <p><strong>Disability:</strong> {personalDetails?.disability || 'Add Disability'}</p>
                            <p><strong>Religion:</strong> {personalDetails?.religion || 'Add Religion'}</p>
                            <p><strong>Caste:</strong> {personalDetails?.caste || 'Add Caste'}</p>
                            <p><strong>Sub-Caste:</strong> {personalDetails?.subCaste || 'Add Sub-Caste'}</p>
                            <p><strong>State:</strong> {personalDetails?.location?.state || 'Add State'}</p>
                            <p><strong>District:</strong> {personalDetails?.location?.district || 'Add District'}</p>
                            <p><strong>Horoscope:</strong> {personalDetails?.horoscope || 'Add Horoscope'}</p>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Partner Preferences</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handlePreferenceClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="preferences-section">
                            <h4>Basic Preferences</h4>
                            <p><strong>Age Range:</strong> {partnerPreferences?.basic?.ageRange?.min || 'min'} - {partnerPreferences?.basic?.ageRange?.max || 'max'}</p>
                            <p><strong>Height:</strong> {partnerPreferences?.basic?.height || 'Add Height'}</p>
                            <p><strong>Qualification:</strong> {partnerPreferences?.basic?.qualification || 'Add Qualification'}</p>
                            <p><strong>Profession:</strong> {partnerPreferences?.basic?.profession || 'Add Profession'}</p>
                            <p><strong>Marital Status:</strong> {partnerPreferences?.basic?.maritalStatus || 'Add Marital Status'}</p>
                            <p><strong>Religion:</strong> {partnerPreferences?.basic?.religion || 'Add Religion'}</p>
                            <p><strong>Caste:</strong> {partnerPreferences?.basic?.caste || 'Add Caste'}</p>
                            <p><strong>Sub-Caste:</strong> {partnerPreferences?.basic?.subCaste || 'Add Sub-Caste'}</p>
                            <p><strong>Mother Tongue:</strong> {partnerPreferences?.basic?.motherTongue || 'Add Mother Tongue'}</p>
                            <p><strong>Country:</strong> {partnerPreferences?.basic?.country || 'Add Country'}</p>
                            <p><strong>State:</strong> {partnerPreferences?.basic?.state || 'Add State'}</p>
                            <p><strong>District:</strong> {partnerPreferences?.basic?.district || 'Add District'}</p>
                            <p><strong>Horoscope Match:</strong> {partnerPreferences?.basic?.horoscopeMatch || 'Add Horoscope Match'}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>Professional Preferences</h4>
                            <p><strong>Minimum Income:</strong> {partnerPreferences?.professional?.income || 'Add Minimum Income'}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>Location Preferences</h4>
                            <p><strong>District:</strong> {partnerPreferences?.location?.district || 'Add District'}</p>
                            <p><strong>State:</strong> {partnerPreferences?.location?.state || 'Add State'}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>Physical Preferences</h4>
                            <p><strong>Weight:</strong> {partnerPreferences?.physical?.weight || 'Add Weight'}</p>
                            <p><strong>Complexion:</strong> {partnerPreferences?.physical?.complexion || 'Add Complexion'}</p>
                            <p><strong>Disability:</strong> {partnerPreferences?.physical?.disability || 'Add Disability'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import MainNavbar from '../MainNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [basicDetails, setBasicDetails] = useState({});
    const [personalDetails, setPersonalDetails] = useState({});
    const [partnerPreferences, setPartnerPreferences] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('body-background');

        return () => {
            document.body.classList.remove('body-background');
        };
    }, []);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id; // Adjust this based on your token structure

                const fetchBasicDetails = async (userId) => {
                    try {
                        const response = await axios.get(`http://localhost:8000/user/register-details/${userId}`);
                        setBasicDetails(response.data);
                    } catch (error) {
                        console.error('Error fetching basic details:', error);
                    }
                };

                const fetchPersonalDetails = async (userId) => {
                    try {
                        const response = await axios.get(`http://localhost:8000/user/personal-details/${userId}`);
                        setPersonalDetails(response.data);
                    } catch (error) {
                        console.error('Error fetching personal details:', error);
                    }
                };

                const fetchPartnerPreferences = async (userId) => {
                    try {
                        const response = await axios.get(`http://localhost:8000/user/partnerpreferences/${userId}`);
                        setPartnerPreferences(response.data);
                    } catch (error) {
                        console.error('Error fetching partner preferences:', error);
                    }
                };

                fetchBasicDetails(userId);
                fetchPersonalDetails(userId);
                fetchPartnerPreferences(userId);
            } catch (error) {
                console.error('Token decoding error:', error);
                // Handle token error (e.g., redirect to login)
            }
        }
    }, []);

    const handleEdit = () => {
        alert('Implement your edit functionality here!');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleCreateClick = () => {
        navigate('/create');
    };

    const handlePreferenceClick = () => {
        navigate('/preference');
    };

    return (


        <>
            <MainNavbar />
            <div className="container">
                <div className="profile-header">
                    <div className="profile-pic">
                        {/* Display profile picture }
                        {basicDetails.profilePicture ? (
                            <img src={basicDetails.profilePicture} alt="Profile" />
                        ) : (
                            <div className="placeholder">No Profile Picture</div>
                        )}
                        <button className="edit-photo-btn" onClick={handleEdit}>
                            Edit Profile Picture
                        </button>
                    </div>
                    <div className="profile-info">
                        <h2>{basicDetails?.name || 'User Name'}</h2>
                        <p>{basicDetails?.age ? `${basicDetails.age} Yrs` : 'Age'}</p>
                        <p>{personalDetails?.height ? `${personalDetails.height} Cm` : 'Height'}</p>
                        <p>{personalDetails ? `${personalDetails.religion}, ${personalDetails.caste}` : 'Religion, Caste'}</p>
                        <p>{basicDetails?.qualification || 'Qualification'}</p>
                        <p>{personalDetails?.occupation || 'Occupation'}</p>
                        <p>{personalDetails?.location?.district || 'District:'}</p>
                    </div>
                </div>
                <div className="profile-sections">
                    <div className="section">
                        <h3>Basic Details</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handleRegisterClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="details-grid">
                            <p><strong>Name:</strong> {basicDetails?.name || 'Add Name'}</p>
                            <p><strong>Age:</strong> {basicDetails?.age || 'Add Age'}</p>
                            <p><strong>Height:</strong> {basicDetails?.height || 'Add Height'}</p>
                            <p><strong>Hobbies:</strong> {basicDetails?.hobbies || 'Add Hobbies'}</p>
                            <p><strong>Interest:</strong> {basicDetails?.interest || 'Add Interest'}</p>
                            <p><strong>Drinking Habits:</strong> {basicDetails?.drinkingHabits || 'Add Drinking Habits'}</p>
                            <p><strong>Smoking Habits:</strong> {basicDetails?.smokingHabits || 'Add Smoking Habits'}</p>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Personal Details</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handleCreateClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="details-grid">
                            <p><strong>Father's Name:</strong> {personalDetails?.fatherName || 'Add Father\'s Name'}</p>
                            <p><strong>Father's Occupation:</strong> {personalDetails?.fatherOccupation || 'Add Father\'s Occupation'}</p>
                            <p><strong>Mother's Name:</strong> {personalDetails?.motherName || 'Add Mother\'s Name'}</p>
                            <p><strong>Mother's Occupation:</strong> {personalDetails?.motherOccupation || 'Add Mother\'s Occupation'}</p>
                            <p><strong>Number of Siblings:</strong> {personalDetails?.noOfSiblings || 'Add Number of Siblings'}</p>
                            <p><strong>Number of Brothers:</strong> {personalDetails?.noOfBrothers || 'Add Number of Brothers'}</p>
                            <p><strong>Number of Sisters:</strong> {personalDetails?.noOfSisters || 'Add Number of Sisters'}</p>
                            <p><strong>Number of Married:</strong> {personalDetails?.noOfMarried || 'Add Number of Married'}</p>
                            <p><strong>Number of Unmarried:</strong> {personalDetails?.noOfUnmarried || 'Add Number of Unmarried'}</p>
                            <p><strong>Family Class:</strong> {personalDetails?.familyClass || 'Add Family Class'}</p>
                            <p><strong>Family Value:</strong> {personalDetails?.familyValue || 'Add Family Value'}</p>
                            <p><strong>User Income:</strong> {personalDetails?.userIncome || 'Add User Income'}</p>
                            <p><strong>Occupation:</strong> {personalDetails?.occupation || 'Add Occupation'}</p>
                            <p><strong>Height:</strong> {personalDetails?.height || 'Add Height'}</p>
                            <p><strong>Weight:</strong> {personalDetails?.weight || 'Add Weight'}</p>
                            <p><strong>Complexion:</strong> {personalDetails?.complexion || 'Add Complexion'}</p>
                            <p><strong>Disability:</strong> {personalDetails?.disability || 'Add Disability'}</p>
                            <p><strong>Religion:</strong> {personalDetails?.religion || 'Add Religion'}</p>
                            <p><strong>Caste:</strong> {personalDetails?.caste || 'Add Caste'}</p>
                            <p><strong>Sub-Caste:</strong> {personalDetails?.subCaste || 'Add Sub-Caste'}</p>
                            <p><strong>State:</strong> {personalDetails?.location?.state || 'Add State'}</p>
                            <p><strong>District:</strong> {personalDetails?.location?.district || 'Add District'}</p>
                            <p><strong>Qualification:</strong> {personalDetails?.qualification || 'Add Qualification'}</p>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Partner Preferences</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handlePreferenceClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="preferences-section">
                            <h4>Basic Preferences</h4>
                            <p><strong>Age Range:</strong> {partnerPreferences?.basic?.ageRange?.min || 'min'} - {partnerPreferences?.basic?.ageRange?.max || 'max'}</p>
                            <p><strong>Height:</strong> {partnerPreferences?.basic?.height?.min || 'min'} - {partnerPreferences?.basic?.height?.max || 'max'}</p>
                            <p><strong>Religion:</strong> {partnerPreferences?.basic?.religion || 'Add Religion'}</p>
                            <p><strong>Caste:</strong> {partnerPreferences?.basic?.caste || 'Add Caste'}</p>
                            <p><strong>Sub-Caste:</strong> {partnerPreferences?.basic?.subCaste || 'Add Sub-Caste'}</p>
                            <p><strong>Location:</strong> {partnerPreferences?.basic?.location?.state || 'Add State'}, {partnerPreferences?.basic?.location?.district || 'Add District'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
*/




/*import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../MainNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './Profile.css'; // Import CSS for component-specific styles

const Profile = () => {
    const userDetails = useSelector((state) => state.user);
    const { basicDetails, personalDetails, partnerPreferences } = userDetails;
    const navigate = useNavigate();

    useEffect(() => {
        // Add the background class to the body
        document.body.classList.add('body-background');

        // Remove the background class when the component is unmounted
        return () => {
            document.body.classList.remove('body-background');
        };
    }, []);

    // Safely access nested properties using conditional rendering or optional chaining
    const ageRangeMin = partnerPreferences?.basic?.ageRange?.min || 'min';
    const ageRangeMax = partnerPreferences?.basic?.ageRange?.max || 'max';
    const height = partnerPreferences?.basic?.height || 'Add Height';
    const maritalStatus = partnerPreferences?.basic?.maritalStatus || 'Add Marital Status';
    const eatingHabits = partnerPreferences?.basic?.eatingHabits || 'Add Eating Habits';
    const drinkingHabits = partnerPreferences?.basic?.drinkingHabits || 'Add Drinking Habits';
    const smokingHabits = partnerPreferences?.basic?.smokingHabits || 'Add Smoking Habits';

    const religion = partnerPreferences?.religious?.religion || 'Add Religion';
    const caste = partnerPreferences?.religious?.caste || 'Add Caste';
    const subCaste = partnerPreferences?.religious?.subCaste || 'Add Sub-Caste';

    const education = partnerPreferences?.professional?.education || 'Add Education';
    const employedIn = partnerPreferences?.professional?.employedIn || 'Add Employed-In';
    const annualIncome = partnerPreferences?.professional?.annualIncome || 'Add Annual-Income';

    const state = partnerPreferences?.location?.state || 'Add State';
    const district = partnerPreferences?.location?.district || 'Add District';
    const aboutMyPartner = partnerPreferences?.aboutMyPartner || 'Description';

    const handleEdit = () => {
        alert('Implement your edit functionality here!');
    };
    const handleRegisterClick = () => {
        navigate('/register'); // Redirect to the next page
    };
    const handleCreateClick = () => {
        navigate('/create');
    };

    const handlePreferenceClick = () => {
        navigate('/preference');
    };


    return (
        <>
            <MainNavbar />
            <div className="container">
            <div className="profile-header">
                    <div className="profile-pic">
                        { Display profile picture }
                        {basicDetails.profilePicture ? (
                            <img src={basicDetails.profilePicture} alt="Profile" />
                        ) : (
                            <div className="placeholder">No Profile Picture</div>
                        )}
                        <button className="edit-photo-btn" onClick={handleEdit}>
                            Edit Profile Picture
                        </button>
                    </div>
                    <div className="profile-info">
                        <h2>{basicDetails?.name || 'User Name'}</h2>
                        <p>{basicDetails ? `${basicDetails.age} Yrs` : 'Age'}</p>
                        <p>{personalDetails ? `${personalDetails?.height} Cm` : 'Height'}</p>
                        <p>{personalDetails ? `${personalDetails.religion}, ${personalDetails.caste}` : 'Religion, Caste'}</p>
                        <p>{basicDetails ? basicDetails.qualification : 'Qualification'}</p>
                        <p>{personalDetails ? personalDetails.occupation : 'Occupation'}</p>
                        <p>{personalDetails && personalDetails.location ? personalDetails.location.district : 'District:'}</p>
                    </div>
                </div>
             
                <div className="profile-sections">
                    <div className="section">
                        <h3>Basic Details</h3>
                        <div className="edit-button-container">
                           
                            <button className="edit-button" onClick={handleRegisterClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        </div>
                        <div className="details-grid">
                           
                         
                            <p><strong>Name:</strong> {basicDetails?.name || 'Add Name'}</p>
                            <p><strong>Age:</strong> {basicDetails?.age || 'Add Age'}</p>
                            <p><strong>Height:</strong> {basicDetails?.height || 'Add Height'}</p>
                            <p><strong>Hobbies:</strong> {basicDetails?.hobbies || 'Add Hobbies'}</p>
                            <p><strong>Intrest:</strong> {basicDetails?.interest || 'Add Interest'}</p>
                            <p><strong>Drinking Habits:</strong> {basicDetails?.drinkingHabits || 'Add Drinking Habits'}</p>
                            <p><strong>Smoking Habits:</strong> {basicDetails?.smokingHabits || 'Add Smoking Habits'}</p>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Personal Details</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handleCreateClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                        <div className="details-grid">
                            <p><strong>Father's Name:</strong> {personalDetails?.fatherName || 'Add Father\'s Name'}</p>
                            <p><strong>Father's Occupation:</strong> {personalDetails?.fatherOccupation || 'Add Father\'s Occupation'}</p>
                            <p><strong>Mother's Name:</strong> {personalDetails?.motherName || 'Add Mother\'s Name'}</p>
                            <p><strong>Mother's Occupation:</strong> {personalDetails?.motherOccupation || 'Add Mother\'s Occupation'}</p>
                            <p><strong>Number of Siblings:</strong> {personalDetails?.noOfSiblings || 'Add Number of Siblings'}</p>
                            <p><strong>Number of Brothers:</strong> {personalDetails?.noOfBrothers || 'Add Number of Brothers'}</p>
                            <p><strong>Number of Sisters:</strong> {personalDetails?.noOfSisters || 'Add Number of Sisters'}</p>
                            <p><strong>Number of Married:</strong> {personalDetails?.noOfMarried || 'Add Number of Married'}</p>
                            <p><strong>Number of Unmarried:</strong> {personalDetails?.noOfUnmarried || 'Add Number of Unmarried'}</p>
                            <p><strong>Family Class:</strong> {personalDetails?.familyClass || 'Add Family Class'}</p>
                            <p><strong>Family Value:</strong> {personalDetails?.familyValue || 'Add Family Value'}</p>
                            <p><strong>User Income:</strong> {personalDetails?.userIncome || 'Add User Income'}</p>
                            <p><strong>Occupation:</strong> {personalDetails?.occupation || 'Add Occupation'}</p>
                            <p><strong>Height:</strong> {personalDetails?.height || 'Add Height'}</p>
                            <p><strong>Weight:</strong> {personalDetails?.weight || 'Add Weight'}</p>
                            <p><strong>Complexion:</strong> {personalDetails?.complexion || 'Add Complexion'}</p>
                            <p><strong>Disability:</strong> {personalDetails?.disability || 'Add Disability'}</p>
                            <p><strong>Religion:</strong> {personalDetails?.religion || 'Add Religion'}</p>
                            <p><strong>Caste:</strong> {personalDetails?.caste || 'Add Caste'}</p>
                            <p><strong>Sub-Caste:</strong> {personalDetails?.subCaste || 'Add Sub-Caste'}</p>
                            <p><strong>State:</strong> {personalDetails?.location?.state || 'Add State'}</p>
                            <p><strong>District:</strong> {personalDetails?.location?.district || 'Add District'}</p>
                            <p><strong>Horoscope:</strong> {personalDetails?.horoscope || 'Add Horoscope'}</p>
                        </div>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Partner Preferences</h3>
                        <div className="edit-button-container">
                            <button className="edit-button" onClick={handlePreferenceClick}>
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                            </button>
                            </div>
                        <div className="preferences-section">
                            <h4>Basic Preferences</h4>
                            <p><strong>Age Range:</strong> {ageRangeMin} - {ageRangeMax}</p>
                            <p><strong>Height:</strong> {height}</p>
                            <p><strong>Marital Status:</strong> {maritalStatus}</p>
                            <p><strong>Eating Habits:</strong> {eatingHabits}</p>
                            <p><strong>Drinking Habits:</strong> {drinkingHabits}</p>
                            <p><strong>Smoking Habits:</strong> {smokingHabits}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>Religious Preferences</h4>
                            <p><strong>Religion:</strong> {religion}</p>
                            <p><strong>Caste:</strong> {caste}</p>
                            <p><strong>Sub-Caste:</strong> {subCaste}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>Professional Preferences</h4>
                            <p><strong>Education:</strong> {education}</p>
                            <p><strong>Employed In:</strong> {employedIn}</p>
                            <p><strong>Annual Income:</strong> {annualIncome}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>Location Preferences</h4>
                            <p><strong>State:</strong> {state}</p>
                            <p><strong>District:</strong> {district}</p>
                        </div>
                        <div className="preferences-section">
                            <h4>About My Partner</h4>
                            <p>{aboutMyPartner}</p>
                        </div>
                        </div>
                    </div>
                </div>
           
        </>
    );
};

export default Profile;
*/