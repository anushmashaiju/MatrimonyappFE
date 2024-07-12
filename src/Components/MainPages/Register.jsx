
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setBasicDetails } from '../../Redux/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    basicDetails: {
      name: '',
      age: '',
      gender: '',
      dateOfBirth: '',
      qualification: '',
      hobbies: '',
      interest: '',
      drinkingHabits: '',
      smokingHabits: '',
      profilePicture: null,
      multipleImages: [],
      shortReel: null,
    },
  });




  const handleChange = (field, value) => {
    setProfile(prevState => ({
      ...prevState,
      basicDetails: {
        ...prevState.basicDetails,
        [field]: value,
      },
    }));
  };

  const handleFileChange = (field, files) => {
    setProfile(prevState => ({
      ...prevState,
      basicDetails: {
        ...prevState.basicDetails,
        [field]: field === 'multipleImages' ? [...files] : files[0],
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    Object.keys(profile.basicDetails).forEach((key) => {
      if (key === 'multipleImages') {
        profile.basicDetails[key].forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, profile.basicDetails[key]);
      }
    });
  
    try {
      const response = await axios.post('http://localhost:8000/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, // Ensure cookies are sent
      });
  
      console.log('Response:', response.data);
  
      const basicDetails = {
        ...profile.basicDetails,
        profilePicture: '',
        multipleImages: [],
        shortReel: '',
      };
  
      dispatch(setBasicDetails(basicDetails));
      navigate('/employment');
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };
  
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h1>User Details</h1>
        <h2>Profile Picture</h2>
        <div className="form-section">
          <input type="file" accept="image/*" onChange={(e) => handleFileChange('profilePicture', e.target.files)} />
        </div>
        <h2>Multiple Images</h2>
        <div className="form-section">
          <input type="file" accept="image/*" multiple onChange={(e) => handleFileChange('multipleImages', e.target.files)} />
        </div>
        <h2>Short Reel</h2>
        <div className="form-section">
          <input type="file" accept="video/*" onChange={(e) => handleFileChange('shortReel', e.target.files)} />
        </div>

        <h2>Basic Details</h2>
        <div className="form-section">
          <input type="text" placeholder="Full Name" value={profile.basicDetails.name} onChange={(e) => handleChange('name', e.target.value)} />
          <input type="text" placeholder="Age" value={profile.basicDetails.age} onChange={(e) => handleChange('age', e.target.value)} />
          <select value={profile.basicDetails.gender} onChange={(e) => handleChange('gender', e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="date" value={profile.basicDetails.dateOfBirth} onChange={(e) => handleChange('dateOfBirth', e.target.value)} />
          <input type="text" placeholder="Qualification" value={profile.basicDetails.qualification} onChange={(e) => handleChange('qualification', e.target.value)} />
          <input type="text" placeholder="Hobbies" value={profile.basicDetails.hobbies} onChange={(e) => handleChange('hobbies', e.target.value)} />
          <input type="text" placeholder="Interest" value={profile.basicDetails.interest} onChange={(e) => handleChange('interest', e.target.value)} />
          <select value={profile.basicDetails.drinkingHabits} onChange={(e) => handleChange('drinkingHabits', e.target.value)}>
            <option value="">Drinking Habits</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select value={profile.basicDetails.smokingHabits} onChange={(e) => handleChange('smokingHabits', e.target.value)}>
            <option value="">Smoking Habits</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button className="nextbutton" onClick={() => navigate('/employment')}>Skip</button>
      </form>
    </div>
  );
};

export default Register;

