import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    basicDetails: {

      age: '',
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

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(profile.basicDetails).forEach(key => {
        if (key === 'multipleImages') {
            for (let i = 0; i < profile.basicDetails[key].length; i++) {
                formData.append(key, profile.basicDetails[key][i]);
            }
        } else {
            formData.append(key, profile.basicDetails[key]);
        }
    });

    try {
        const response = await axios.post('http://localhost:8000/user/profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Response:', response.data); // Log response for debugging
        navigate('/employment', { state: { profile } });
    } catch (error) {
        console.error('Error submitting the form', error); // Log error details
    }
};




  return (
    <form onSubmit={handleSubmit}>
      <h1>User Details</h1>

      <h2>Profile Picture</h2>
      <div className="form-section">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange('profilePicture', e.target.files)}
        />
      </div>

      <h2>Multiple Images</h2>
      <div className="form-section">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileChange('multipleImages', e.target.files)}
        />
      </div>

      <h2>Short Reel</h2>
      <div className="form-section">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => handleFileChange('shortReel', e.target.files)}
        />
      </div>

      <h2>Basic Details</h2>
      <div className="form-section">
        <input
          type="text"
          placeholder="Age"
          value={profile.age}
          onChange={(e) => handleChange('age', e.target.value)}
        />
        <input
          type="date"
          value={profile.basicDetails.dateOfBirth}
          onChange={(e) => handleChange('dateOfBirth', e.target.value)}
        />
        <input
          type="text"
          placeholder="Qualification"
          value={profile.basicDetails.qualification}
          onChange={(e) => handleChange('qualification', e.target.value)}
        />
        <input
          type="text"
          placeholder="Hobbies"
          value={profile.basicDetails.hobbies}
          onChange={(e) => handleChange('hobbies', e.target.value)}
        />
        <input
          type="text"
          placeholder="Interest"
          value={profile.basicDetails.interest}
          onChange={(e) => handleChange('interest', e.target.value)}
        />
        <select
          value={profile.basicDetails.drinkingHabits}
          onChange={(e) => handleChange('drinkingHabits', e.target.value)}
        >
          <option value="">Drinking Habits</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select
          value={profile.basicDetails.smokingHabits}
          onChange={(e) => handleChange('smokingHabits', e.target.value)}
        >
          <option value="">Smoking Habits</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Profile;
